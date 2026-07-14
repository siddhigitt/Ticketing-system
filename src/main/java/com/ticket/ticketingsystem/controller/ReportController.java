package com.ticket.ticketingsystem.controller;

import com.ticket.ticketingsystem.service.ReportService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ai")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @GetMapping("/report")
    public String generateReport() {

        return reportService.generateReport();

    }

}