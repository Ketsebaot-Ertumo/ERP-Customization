"use client";
import API from './api';

export const getEmployees = async () => {
    try {
        const {data} = await API.get('api/resource/Employee?fields=["*"]');
        return data.data;
    } catch (error) {
        console.error('Error fetching employees:', error.message);
        throw error;
    }
};

export const getEmployeeById = async (id) => {
    try {
        const response = await API.get(`api/resource/Employee/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching employee with ID ${id}:`, error.message);
        throw error;
    }
};

export const createEmployee = async (data) => {
    try {
        const response = await API.post('api/resource/Employee', data);
        return response.data;
    } catch (error) {
        console.error('Error creating employee:', error.message);
        throw error;
    }
};

export const updateEmployee = async (id, data) => {
    try {
        const response = await API.put(`api/resource/Employee/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error updating employee with name ${id}:`, error.message);
        throw error;
    }
};

export const deleteEmployee = async (id) => {
    try {
        const response = await API.delete(`api/resource/Employee/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting employee with name ${id}:`, error.message);
        throw error;
    }
};


export const getActiveEmployees = async () => {
    try {
        const { data } = await API.get('api/resource/Employee?filters=[["status","=","Active"]]');
        return data.data;
    } catch (error) {
        console.error('Error fetching active employees:', error.message);
        throw error;
    }
};

