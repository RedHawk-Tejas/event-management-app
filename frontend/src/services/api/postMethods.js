import axios from 'axios';

const BASE_URL = "http://localhost:9080"

export const handleLogin = async(email , password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/authentication/login`, {email, password});
        const {token, id: user_id} = response.data;
        sessionStorage.setItem('USER_ID', user_id);
        sessionStorage.setItem('TOKEN', token);
        return response.status;
    } catch (error) {
        console.log(error, "LOGIN");
    }
}

export const handleSignup = async (name, email, password) => {
    try {
        if (!name || !email || !password ) { return; }
  
        const role = "user";
        const response = await axios.post(`${BASE_URL}/api/authentication/register`, {
        name, email, password, role, });
      
        console.log(response);
        return response.status;
    } catch (error) {
        console.log(error);
    }
};

export const handleSendMsg = async(userName, userEmail, userMessage) => {
    try {
      const messageData = { userName, userEmail, userMessage };
      const response = await axios.post(`${BASE_URL}/api/Message/user_message`, messageData);
      return response.status;
    } catch (error) {
      console.log(error);
    }
};

export const handleAddEvent = async(eventData) => {
  try {
    const token = sessionStorage.getItem('TOKEN');
    const response = await axios.post(`${BASE_URL}/api/event/add_event`, eventData,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.status;
  } catch (error) {
    console.log(error);
  }
}

export const getPaymentDetails = async(eventId, tickets) => {
  try {
    const userId = sessionStorage.getItem('USER_ID');
    const token = sessionStorage.getItem('TOKEN');
    const response = await axios.post(`${BASE_URL}/api/payment/Transaction`, {userId, eventId, frequency: tickets}, {
      headers: {
        Authorization: `Bearer ${token}`,
    },
    })
    return response.data;
    // console.log(response, "get");
  } catch (error) {
    console.log(error);
  }
}

export const sendPaymentDetails = async(total, tickets, razorpay_payment_id, razorpay_order_id, razorpay_signature, timestamp, eventId, eventName) => {
  try {
    const userId = sessionStorage.getItem('USER_ID');
    const token = sessionStorage.getItem('TOKEN');
    const response = await axios.post(`${BASE_URL}/api/payment/PaymentDetails`, {
      userId,
      amount: total,
      tickets,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      timeStamp: timestamp,
      eventId,
      eventName
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
    },
    })
    return response.status;
  } catch (error) {
    console.log(error);
  }
}

export const changePassword = async(email , password) => {
  try {
      const response = await axios.post(`${BASE_URL}/api/authentication/resetByEmail`, {email, newPassword:password});
      return response.status;
  } catch (error) {
      console.log(error, "LOGIN");
  }
}

export const downloadTicket = async(paymentId) => {
  try {
    const userId = sessionStorage.getItem('USER_ID');
    const token = sessionStorage.getItem('TOKEN');
    const response = await axios.post(`${BASE_URL}/api/payment/GetTicket`, {userId, tId: paymentId},{
      responseType: 'blob',
      headers:{
        Accept: 'application/pdf',
        Authorization: `Bearer ${token}`,
      }
    })
    return response.data;
  } catch (error) {
    console.log(error);
  }
}