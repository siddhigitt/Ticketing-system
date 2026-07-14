package com.ticket.ticketingsystem.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class AIService {

    @Value("${groq.api.key}")
    private String apiKey;

    @Value("${groq.api.url}")
    private String apiUrl;

    @Value("${groq.model}")
    private String model;

    private final RestTemplate restTemplate = new RestTemplate();

    public String analyzeTicket(String description) {

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        String prompt = """
Analyze the following IT support ticket.

Return ONLY valid JSON in this format:

{
  "category":"",
  "priority":"",
  "summary":"",
  "suggestions":[]
}

Ticket:
""" + description;

        Map<String, Object> body = Map.of(
                "model", model,
                "messages", List.of(
                        Map.of("role", "user", "content", prompt)
                ),
                "temperature", 0.2
        );

        HttpEntity<Map<String, Object>> entity =
                new HttpEntity<>(body, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                apiUrl,
                HttpMethod.POST,
                entity,
                String.class
        );

        return response.getBody();
    }
    public String generateOperationsReport(String ticketsData) {

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        String prompt = """
You are the AI Operations Manager of an enterprise IT Service Desk.

Analyze all the support tickets below.

Generate a professional operations monitoring report.

Include these sections:

# Operations Monitoring Report

## Executive Summary

## Current Ticket Statistics

## Major Issues

## Recurring Problems

## Potential Incident Detection

## Business Impact

## Operational Risks

## Recommended Actions

Requirements:
- Use Markdown formatting.
- Use bullet points where appropriate.
- Base the report only on the provided tickets.
- If several tickets describe similar issues, identify them as a possible infrastructure incident.
- If many high-priority tickets remain unresolved, highlight the operational risk.
- Do NOT return JSON.
- Write professionally as if this report will be presented to an IT Operations Manager.

Tickets:

""" + ticketsData;

        Map<String, Object> body = Map.of(
                "model", model,
                "messages", List.of(
                        Map.of("role", "user", "content", prompt)
                ),
                "temperature", 0.2
        );

        HttpEntity<Map<String, Object>> entity =
                new HttpEntity<>(body, headers);

        ResponseEntity<String> response =
                restTemplate.exchange(
                        apiUrl,
                        HttpMethod.POST,
                        entity,
                        String.class
                );

        return response.getBody();

    }
}