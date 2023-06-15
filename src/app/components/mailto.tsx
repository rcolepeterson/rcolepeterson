import React from "react";

interface ContactProps {
  email: string;
}

export const Mailto: React.FC<ContactProps> = ({ email }) => {
  const subject = "hello";
  const body = "Hello";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return <a href={mailtoLink}>{email}</a>;
};

export default Mailto;
