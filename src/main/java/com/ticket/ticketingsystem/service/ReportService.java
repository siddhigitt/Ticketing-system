package com.ticket.ticketingsystem.service;

import com.ticket.ticketingsystem.entity.Ticket;
import com.ticket.ticketingsystem.repository.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    private final TicketRepository ticketRepository;
    private final AIService aiService;

    public ReportService(TicketRepository ticketRepository,
                         AIService aiService) {
        this.ticketRepository = ticketRepository;
        this.aiService = aiService;
    }

    public String generateReport() {

        List<Ticket> tickets = ticketRepository.findAll();

        if (tickets.isEmpty()) {
            return "No tickets found.";
        }

        StringBuilder report = new StringBuilder();

        for (Ticket ticket : tickets) {

            report.append("Title: ")
                    .append(ticket.getTitle())
                    .append("\n");

            report.append("Description: ")
                    .append(ticket.getDescription())
                    .append("\n");

            report.append("Category: ")
                    .append(ticket.getCategory())
                    .append("\n");

            report.append("Priority: ")
                    .append(ticket.getPriority())
                    .append("\n");

            report.append("Status: ")
                    .append(ticket.getStatus())
                    .append("\n\n");
        }

        return aiService.generateOperationsReport(report.toString());
    }
}