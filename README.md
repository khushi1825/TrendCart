# 👗 TrendCart — Full-Stack Women's Fashion E-Commerce Platform

<div align="center">

### Shop. Share. Vote. Buy with Confidence.

A full-stack women's fashion e-commerce platform built with the MERN stack, featuring secure authentication, online payments, wishlist & cart management, and a unique **Vote-Before-You-Buy** social shopping experience.

<br />

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20TrendCart-25671E?style=for-the-badge)](https://trend-cart-react-razorpay-3x3v.vercel.app/)
[![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Backend](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

</div>

---

## 🌐 Live Application

**Try TrendCart:**  
👉 https://trend-cart-react-razorpay-3x3v.vercel.app/

The frontend is deployed on **Vercel**, while the backend is deployed on **Render**.

---

## 📌 About the Project

**TrendCart** is a full-stack women's fashion e-commerce application designed to provide a complete online shopping experience while solving a common problem:

> *"I like this outfit, but I want to know what my friends think before I buy it."*

To address this, TrendCart introduces a unique **Vote-Before-You-Buy** feature that allows users to select a product, share it with their friends through WhatsApp, and collect feedback through:

- 👍 Like
- 👎 Dislike
- 🌟 Excellent

Along with social voting, the platform provides essential e-commerce functionality including authentication, product browsing, cart management, wishlist management, order processing, and Razorpay payment integration.

---

# ✨ Key Features

### 🛍️ Product Browsing

- Browse products from the centralized product database
- Product details and images
- Product categorization
- Responsive shopping interface

### 🛒 Shopping Cart

- Add products to cart
- Increase/decrease product quantity
- Remove products
- Persistent cart data
- User-specific cart management

### ❤️ Wishlist

- Add products to wishlist
- Remove products from wishlist
- Persistent user-specific wishlist

### 👤 Authentication & Authorization

- User registration and login
- Password hashing using **bcrypt**
- **JWT-based authentication**
- Protected backend APIs
- User-specific resource access
- Session verification through authenticated requests

### 💳 Online Payments

Integrated **Razorpay** for online payment processing.

Payment flow includes:

1. User proceeds to checkout
2. Backend creates a Razorpay order
3. Razorpay Checkout is opened
4. User completes the payment
5. Backend verifies the payment response
6. Order is stored and associated with the authenticated user

### 🗳️ Vote-Before-You-Buy

One of TrendCart's main differentiating features.

1. User selects a product they are considering buying
2. The product is added to a voting post
3. Selected friends are associated with the voting post
4. User can share the voting invitation through WhatsApp
5. Friends open the voting section
6. Friends submit:
   - 👍 Like
   - 👎 Dislike
   - 🌟 Excellent
7. The product owner can view the collected feedback before purchasing

### 👥 Friend Management

- Add friends using their registered email
- Prevent duplicate friends
- Prevent adding yourself
- Remove friends
- Use friends for product voting

### 📦 Orders

- Create orders after successful payment
- Store order information in MongoDB
- Associate orders with the authenticated user
- View previous orders

### 📱 Responsive Design

Designed to work across:

- Desktop
- Tablet
- Mobile

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │      React UI       │
                    │      Frontend       │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST APIs
                               ▼
                    ┌─────────────────────┐
                    │   Node.js + Express │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        ┌───────────┐    ┌────────────┐   ┌───────────┐
        │  MongoDB  │    │  Razorpay  │   │  EmailJS  │
        │  Database │    │  Payments  │   │   Emails  │
        └───────────┘    └────────────┘   └───────────┘
