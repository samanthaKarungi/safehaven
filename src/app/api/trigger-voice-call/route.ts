/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import axios from 'axios';

const VOICE_CALL_API_KEY = process.env.VOICE_CALL_API_KEY;
const VOICE_CALL_USERNAME = process.env.VOICE_CALL_USERNAME;

export async function POST() {
  try {
    const recipients = "+256776620351";

    // Using URLSearchParams to encode the data properly
    const formData = new URLSearchParams();
    formData.append('username', VOICE_CALL_USERNAME?.trim() || '');
    formData.append('to', recipients);
    formData.append('from', '+256323200789');

    const response = await axios({
      method: 'post',
      url: 'https://voice.africastalking.com/call',
      data: formData.toString(),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'apiKey': VOICE_CALL_API_KEY?.trim() || '',
      },
    });

    console.log('API Response:', response.data);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: 'Failed to send SMS',
        details: error.response?.data || error.message
      }, 
      { status: 500 }
    );
  }
}