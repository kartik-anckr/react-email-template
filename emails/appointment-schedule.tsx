import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const StripeWelcomeEmail = () => (
  <Html lang="en">
    <Head>
      <title>Enrollment Appointment</title>
    </Head>
    <Body
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#F4F4F4",
        fontFamily: "Helvetica",
        color: "#333",
      }}
    >
      <Container
        style={{
          backgroundColor: "#FFFFFF",
          maxWidth: "600px",
          margin: "20px auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header Section */}
        <Section
          style={{
            textAlign: "center",
            padding: "30px 50px 0",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Img
            src="https://upstatecoop.org/wp-content/themes/uhc/images/logo.png"
            alt="Upstate Homeschool Co-op"
            style={{
              maxWidth: "80px",
              height: "auto",
              margin: "10px auto", // Ensures the image is centered horizontally
              display: "block", // Ensures it respects `margin` for centering
              borderRadius: "100px",
              backgroundColor: "#FFFFFF",
            }}
          />
          <div style={{ borderBottom: "1px solid #DDDDDD", margin: 0 }} />
          <Heading
            as="h1"
            style={{
              fontSize: "18px",
              color: "#6C6E6E",
              fontWeight: 700,
              margin: "25px 0 0 0",
            }}
          >
            UHC Scheduling Update
          </Heading>
        </Section>

        {/* Content Section */}
        <Section style={{ padding: "20px 50px", textAlign: "center" }}>
          <Heading
            as="h2"
            style={{ fontSize: "28px", color: "#374151", margin: "0 0 20px 0" }}
          >
            Your Enrollment Appointment
          </Heading>
          <Text
            style={{
              color: "#BF0103",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            March 10, 1:00 pm
          </Text>
          <Text
            style={{
              color: "#6B7280",
              fontWeight: "300",
            }}
          >
            for Noah, Ava, and Dylan
          </Text>
          <div style={{ borderBottom: "1px solid #DDDDDD", margin: 0 }} />
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "black",
              margin: "15px 0 15px 0",
            }}
          >
            Location
          </Text>
          <Text
            style={{
              color: "#BF0103",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Grace Church Taylors
          </Text>
          <Text
            style={{
              color: "#6B7280",
              fontWeight: "700",
              textDecoration: "underline",
              fontSize: "14px",
            }}
          >
            2701 Wade Hampton Blvd, Taylors, SC 29687
          </Text>
          <Text
            style={{
              fontSize: "14px",
              color: "#6B7280",
              fontWeight: "300",
            }}
          >
            We look forward to meeting with you!
          </Text>
          <div style={{ borderBottom: "1px solid #DDDDDD", margin: 0 }} />
          <Text
            style={{
              color: "black",
              fontWeight: "700",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            What to Expect
          </Text>
          <Text
            style={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#6B7280",
              textDecoration: "underline",
            }}
          >
            Review the on-site enrollment day overview
          </Text>
        </Section>
      </Container>

      {/* Footer Section */}
      <Container
        style={{
          textAlign: "center",
          padding: "10px",
          fontWeight: 400,
          fontSize: "14px",
          color: "#6B7280",
        }}
      >
        <a href="" style={{ margin: 0 }}>
          upstatecoop.org
        </a>
      </Container>
    </Body>
  </Html>
);

export default StripeWelcomeEmail;
