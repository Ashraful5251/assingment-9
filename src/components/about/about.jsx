import React from "react";

const about = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-4xl font-semibold mb-4">
        About Us - Corporate Events
      </h1>
      <p className="text-lg mb-4">
        We are your go-to destination for a wide range of corporate events,
        specializing in the following categories:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong className="text-indigo-600">Conferences and Seminars:</strong>{" "}
          Providing valuable knowledge-sharing and networking opportunities for
          professionals.
        </li>
        <li>
          <strong className="text-indigo-600">Trade Shows and Expos:</strong>{" "}
          Showcasing the latest products and services in your industry to a wide
          audience.
        </li>
        <li>
          <strong className="text-indigo-600">Team Building Workshops:</strong>{" "}
          Strengthening teamwork and collaboration within your organization
          through engaging workshops.
        </li>
        <li>
          <strong className="text-indigo-600">Product Launches:</strong>{" "}
          Creating buzz and excitement around your new products or services.
        </li>
        <li>
          <strong className="text-indigo-600">Corporate Meetings:</strong>{" "}
          Facilitating important discussions and decision-making among key
          stakeholders.
        </li>
        <li>
          <strong className="text-indigo-600">Award Ceremonies:</strong>{" "}
          Recognizing and celebrating outstanding achievements within your
          company or industry.
        </li>
        {/* Add more categories as needed */}
      </ul>
      <p className="text-lg mb-4">
        Our team is dedicated to delivering exceptional event experiences that
        meet your specific needs. Whether it's a large-scale conference or an
        intimate team-building workshop, we are here to make your corporate
        events a resounding success.
      </p>
      <p className="text-lg">
        Contact us today to discuss how we can help you plan and execute
        memorable corporate events that leave a lasting impact.
      </p>
    </div>
  );
};

export default about;
