package com.ticket.ticketingsystem.controller;

import com.ticket.ticketingsystem.entity.Ticket;
import com.ticket.ticketingsystem.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    // Create a new ticket
    @PostMapping
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return ticketService.createTicket(ticket);
    }

    // Get all tickets
    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    // Get ticket by ID
    @GetMapping("/{id}")
    public Ticket getTicketById(@PathVariable Long id) {
        return ticketService.getTicketById(id);
    }

    // Update ticket status
    @PutMapping("/{id}")
    public Ticket updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return ticketService.updateStatus(id, status);
    }

    // Delete ticket
    @DeleteMapping("/{id}")
    public String deleteTicket(@PathVariable Long id) {

        ticketService.deleteTicket(id);

        return "Ticket deleted successfully";
    }

    // Get tickets by status
    @GetMapping("/status/{status}")
    public List<Ticket> getTicketsByStatus(@PathVariable String status) {

        return ticketService.getTicketsByStatus(status);

    }

    // Get tickets by priority
    @GetMapping("/priority/{priority}")
    public List<Ticket> getTicketsByPriority(@PathVariable String priority) {

        return ticketService.getTicketsByPriority(priority);

    }

    // Get tickets by category
    @GetMapping("/category/{category}")
    public List<Ticket> getTicketsByCategory(@PathVariable String category) {

        return ticketService.getTicketsByCategory(category);

    }
}