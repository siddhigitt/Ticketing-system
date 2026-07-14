package com.ticket.ticketingsystem.dto;

public class DashboardStats {

    private long totalTickets;
    private long openTickets;
    private long criticalTickets;
    private long resolvedTickets;

    public DashboardStats() {}

    public DashboardStats(long totalTickets,
                          long openTickets,
                          long criticalTickets,
                          long resolvedTickets) {

        this.totalTickets = totalTickets;
        this.openTickets = openTickets;
        this.criticalTickets = criticalTickets;
        this.resolvedTickets = resolvedTickets;
    }

    public long getTotalTickets() {
        return totalTickets;
    }

    public void setTotalTickets(long totalTickets) {
        this.totalTickets = totalTickets;
    }

    public long getOpenTickets() {
        return openTickets;
    }

    public void setOpenTickets(long openTickets) {
        this.openTickets = openTickets;
    }

    public long getCriticalTickets() {
        return criticalTickets;
    }

    public void setCriticalTickets(long criticalTickets) {
        this.criticalTickets = criticalTickets;
    }

    public long getResolvedTickets() {
        return resolvedTickets;
    }

    public void setResolvedTickets(long resolvedTickets) {
        this.resolvedTickets = resolvedTickets;
    }

}