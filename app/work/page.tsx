import type { Metadata } from 'next';
import Link from 'next/link';

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        On a mission to build products people love, 
        and along the way, share and document my journey. 
        Here's a summary of my work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Rouge Immobilier</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Platform Engineer, 2022 - 2023
        </p>
        <p>
          I joined Rouge Immobilier to grow into a startup environment 
          and to help migrate their monolith to a brand new cloud-native 
          architecture as a platform-focused engineer.
        </p>
        <ul>
          <li>
            In 2022, I was onboarded as a backend focused engineer. We evaluated businesses needs and translated them to functionnal requirements for the new infra. I had the chance to work on some interesting challenges like building a new API Gateway and a new event-driven architecture. Migrating the monolith to a new cloud-native architecture was a big challenge, but we managed to do it in less than 6 months.
          </li>
          <li>
            As the new repo grew and development experience became a big pain point for the team. I transitioned and focused on improving the developer experience by building a CI/CD pipeline and a new monorepo to host all the shared components. I had the chance to work with some great people and learn a lot about the frontend ecosystem while automating the deployment and testing of the new platform.
          </li>
          <li>
            Now the migration almost complete, I'm working with the support team on the new 
            platform to help the team transitioning to the maintenance phase.
          </li>
        </ul>
        <p>
          Since I joined Rouge, sales have grown by 300% and the team has grown from 5 to 20 people. Now a recognized name in Atlantic Canada, I have learned an immense amount. It's been a wild ride so far and I'm excited to see what's next for them.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Kong Fou Inc.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          ETL Developer, 2021 — 2022
        </p>
        <p>
          At Kong Fou, a dynamic startup in the automotive parts industry based in Montreal, I played a crucial role in the post-acquisition integration of diverse data sources into the company's ERP system. As an ETL Developer, my responsibilities centered around constructing a data pipeline and a data warehouse to streamline and optimize data management processes.
        </p>
        <p>
          On the data pipeline side, I worked with the team to build a data pipeline using Databricks and Python. I also helped the team to build a small-scale data warehouse using a minimal MySQL setup. I had the opportunity to drive the data-driven culture by building a data catalog and a data dictionary, as well as coach managers on KPIs to help the team understand the data.
        </p>
        <p>
          Throughout my time with them, I was able to work on some hard problems:
          write advanced SQL queries, develop REST APIs, build ETL pipelines with DataBricks, and more. I also had the opportunity to work with some great people and learn a lot about the data ecosystem while building the data pipeline and the data warehouse.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Freelancer</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Amazon FBA Seller, 2019 - 2021
        </p>
        <p>
          As an Amazon FBA seller, I was using various data analysis tools to help me make better decisions. I was using tools like Helium 10, Jungle Scout, and Keepa to analyze the market and find new products to sell. As time went on, I started to build my own tools to help me make better decisions. I built an event sourcing system to track the price of products over time using NodeJS and a web scraper to track the price of products on Amazon.
        </p>
      </div>
    </section>
  );
}