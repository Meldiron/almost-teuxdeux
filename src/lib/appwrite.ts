import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://appwrite.teuxdeux.almostapps.eu/v1')
    .setProject('almost-teuxdeux');

export const account = new Account(client);