import { NextResponse } from 'next/server';
import axios from 'axios';

const AFRICASTALKING_API_KEY = process.env.AFRICASTALKING_API_KEY;
const AFRICASTALKING_USERNAME = process.env.AFRICASTALKING_USERNAME;

export async function POST(request: Request) {
  try {
    const { contacts } = await request.json();

    if (!contacts || contacts.length === 0) {
      return NextResponse.json(
        { error: 'No contacts provided' },
        { status: 400 }
      );
    }

    const recipients = "+256776620351";

    // Using URLSearchParams to encode the data properly
    const formData = new URLSearchParams();
    formData.append('username', AFRICASTALKING_USERNAME?.trim() || '');
    formData.append('to', recipients);
    formData.append('message', 'Emergency Alert: I need help! Please contact me immediately.');

    const response = await axios({
      method: 'post',
      url: 'https://api.sandbox.africastalking.com/version1/messaging',
      data: formData.toString(),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'apiKey': AFRICASTALKING_API_KEY?.trim() || '',
      },
    });

    console.log('API Response:', response.data);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log('Full error:', error.response?.data || error);
    return NextResponse.json(
      { 
        error: 'Failed to send SMS',
        details: error.response?.data || error.message
      }, 
      { status: 500 }
    );
  }
}