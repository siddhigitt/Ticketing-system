package com.ticket.ticketingsystem.controller;

import com.ticket.ticketingsystem.dto.AIRequest;
import com.ticket.ticketingsystem.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/ai")
public class AIController {

    @Autowired
    private AIService aiService;

    @PostMapping("/analyze")
    public String analyze(@RequestBody AIRequest request) {

        return aiService.analyzeTicket(request.getDescription());

    }
}