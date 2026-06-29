package com.ticket.ticketingsystem.repository;

import com.ticket.ticketingsystem.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {

    // Find all tickets with a given status
    List<Ticket> findByStatus(String status);

    // Find all tickets with a given priority
    List<Ticket> findByPriority(String priority);

    // Find all tickets belonging to a category
    List<Ticket> findByCategory(String category);

}