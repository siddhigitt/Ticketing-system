import axios from "axios";

const API_URL = "http://localhost:8080/tickets";

export const createTicket = async (ticket) => {

    const response = await axios.post(API_URL, ticket);

    return response.data;

};

export const getAllTickets = async () => {

    const response = await axios.get(API_URL);

    return response.data;

};

export const deleteTicket = async (id) => {

    const response = await axios.delete(`${API_URL}/${id}`);

    return response.data;

};