package com.ticket.ticketingsystem.service;

import com.ticket.ticketingsystem.entity.Ticket;
import com.ticket.ticketingsystem.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    // Create a new ticket
    public Ticket createTicket(Ticket ticket) {

        ticket.setStatus("OPEN");

        // Default category if none is provided
        if (ticket.getCategory() == null || ticket.getCategory().isBlank()) {
            ticket.setCategory("OTHER");
        }

        return ticketRepository.save(ticket);
    }

    // Get all tickets
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    // Get ticket by ID
    public Ticket getTicketById(Long id) {

        return ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));

    }

    // Update ticket status
    public Ticket updateStatus(Long id, String status) {

        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));

        ticket.setStatus(status);

        return ticketRepository.save(ticket);
    }

    // Delete ticket
    public void deleteTicket(Long id) {

        ticketRepository.deleteById(id);

    }

    // Find tickets by status
    public List<Ticket> getTicketsByStatus(String status) {

        return ticketRepository.findByStatus(status);

    }

    // Find tickets by priority
    public List<Ticket> getTicketsByPriority(String priority) {

        return ticketRepository.findByPriority(priority);

    }

    // Find tickets by category
    public List<Ticket> getTicketsByCategory(String category) {

        return ticketRepository.findByCategory(category);

    }

}