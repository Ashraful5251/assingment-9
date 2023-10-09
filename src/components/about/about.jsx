import React from "react";

const about = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-700 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2">Learn more about our organization.</p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-10">
        <div className="container mx-auto text-white font-bold">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p>
            We are a passionate team dedicated to [Your Organization's Mission].
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Vivamus ut ante auctor, congue lorem eget, bibendum elit.
          </p>
        </div>
      </section>

      {/* Our History */}
      <section className="bg-gray py-10">
        <div className="container mx-auto text-white font-bold">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p>
            Our journey began in [Year of Establishment]. Since then, we have
            achieved [Milestones and Achievements]. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla facilisi.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-10">
        <div className="container mx-auto text-white font-bold">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            Meet the talented individuals behind [Your Organization's Name].
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Vivamus ut ante auctor, congue lorem eget, bibendum elit.
          </p>
          {/* Add team members' profiles, photos, and descriptions here */}
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-gray py-10">
        <div className="container mx-auto text-white font-bold">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission and Values
          </h2>
          <p>
            At [Your Organization's Name], our mission is to [State Your
            Mission]. We uphold core values such as [Your Core Values] in
            everything we do. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla facilisi.
          </p>
        </div>
      </section>
    </div>
  );
};

export default about;
