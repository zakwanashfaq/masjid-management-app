/**
 * Auth.ts
 * Manages user authentication logic.
 */

import { AppConfiguration } from "./appConfig";


export class Auth {
    static async login(email: string, password: string) {
        const API_ENDPOINT = AppConfiguration.getApiEndpoint();
        const response = await fetch(API_ENDPOINT + '/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            return data;
        } else {
            throw new Error('Login failed');
        }
    }

    static async logout() {
        localStorage.removeItem('token');
    }

    static async signup(email: string, password: string) {
        const API_ENDPOINT = AppConfiguration.getApiEndpoint();
        const response = await fetch(API_ENDPOINT + '/api/v1/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            return data;
        } else {
            throw new Error('Signup failed');
        }
    }

    static async me() {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Not logged in');
        }
        const response = await fetch('http://localhost:3000/api/v1/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Not logged in');
        }
    }
}