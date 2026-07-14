package com.ticket.ticketingsystem.service;

import com.ticket.ticketingsystem.dto.DashboardStats;
import com.ticket.ticketingsystem.repository.TicketRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final TicketRepository ticketRepository;

    public DashboardService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public DashboardStats getDashboardStats() {

        long total = ticketRepository.count();

        long open = ticketRepository.countByStatus("OPEN");

        long critical = ticketRepository.countByPriority("CRITICAL");

        long resolved = ticketRepository.countByStatus("RESOLVED");

        return new DashboardStats(
                total,
                open,
                critical,
                resolved
        );

    }

}