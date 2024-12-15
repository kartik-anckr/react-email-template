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
            Class Creation Notice
          </Heading>
        </Section>

        {/* Content Section */}
        <Section style={{ padding: "20px 50px", textAlign: "center" }}>
          <Heading
            as="h2"
            style={{ fontSize: "28px", color: "#374151", margin: "0 0 20px 0" }}
          >
            className
          </Heading>
          <Text
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#6B7280",
              margin: "15px 0 15px 0",
            }}
          >
            gradeLevels <span style={{ fontWeight: 400 }}>at</span> campus name
          </Text>
          <Text
            style={{
              fontSize: "14px",
              color: "#6B7280",
              margin: "20px 0 15px 0",
            }}
          >
            has been created by{" "}
            <span style={{ fontWeight: 700 }}>classAuthor</span>
          </Text>
          <Text
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#6B7280",
              margin: "30px 0 15px 0",
            }}
          >
            Please review and approve at your convenience
          </Text>
          <Button
            href=""
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#FFFFFF",
              border: "none",
              padding: "16px 60px",
              backgroundColor: "#BF0103",
              margin: "18px 0 10px 0",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View Class
          </Button>
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
