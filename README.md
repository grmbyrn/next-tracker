# Mood Tracker

A full-stack mood tracking web application built with **Next.js 15**, **Firebase**, **Tailwind CSS**, and **TypeScript**. This app enables users to log their daily moods and visualize emotional trends over time through an interactive calendar interface.

## 🌟 Features

- **Daily Mood Logging**: Users can select from five emoji-based mood indicators, ranging from very bad to very good, to represent their daily emotional state.
- **Interactive Calendar View**: A monthly calendar displays the user's mood entries, providing a visual overview of emotional patterns and fluctuations.
- **User Authentication**: Secure sign-in and sign-out functionalities powered by Firebase Authentication, ensuring personalized and protected user experiences.
- **Responsive Design**: Optimized for various devices, offering a seamless user experience on desktops, tablets, and mobile phones.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, Tailwind CSS 4
- **Backend & Authentication**: Firebase
- **Language**: TypeScript
- **Linting & Formatting**: ESLint 9, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/mood-tracker.git
   cd mood-tracker
   ```

2. **Install dependencies:**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**:

Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Run the development server:**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open http://localhost:3000 in your browser to view the application.

## 📦 Deployment

The application is deployed on [Vercel](https://vercel.com/).

For production deployment:

### Build the application:

```bash
    npm run build
    # or
    yarn build
```

**Start the production server:**:

```bash
    npm start
    # or
    yarn start
```

## 📁 Project Structure

```bash
    ├── public/             # Static assets
    ├── src/
    │   ├── components/     # Reusable UI components
    │   ├── pages/          # Next.js pages
    │   ├── styles/         # Global styles
    │   └── utils/          # Utility functions
    ├── .env.local          # Environment variables
    ├── tailwind.config.js  # Tailwind CSS configuration
    ├── next.config.js      # Next.js configuration
    ├── package.json        # Project metadata and scripts
    └── README.md           # Project documentation
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
