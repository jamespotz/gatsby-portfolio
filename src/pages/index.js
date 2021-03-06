import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../components/icon"
import Avatar from "../components/avatar"

const IndexPage = () => (
  <Layout>
    <SEO title="James Robert Rooke" />
    <div className="flex flex-col my-auto">
      <Avatar>
        <Image />
      </Avatar>
      <article
        className="font-default text-gray-700 w-full md:w-4/12 md:my-10"
        alt="James Robert Rooke"
      >
        <p className="text-xl font-normal leading-relaxed tracking-wide mb-4">
          James is a Software Developer skilled with Ruby on Rails, Javascript,
          ReactJs, Databases, CSS, and HTML.
        </p>
        <p className="text-xl font-normal leading-relaxed tracking-wide mb-2">
          James is fueled by his curiosity and his hunger for knowledge. He
          considers himself a <span className="italic">'forever student'</span>{" "}
          eager to learn and grow, and stay tuned with the latest technology
          stack.
        </p>
      </article>
      <ul>
        <li className="mb-2">
          <Link to="/blog/" className="btn">
            article
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/skills/" className="btn">
            skills
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/work/" className="btn">
            work
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/projects/" className="btn">
            personal projects
          </Link>
        </li>
        <li className="mb-2">
          <a href="mailto:thepoltergeist23@gmail.com" className="btn">
            get in touch
          </a>
        </li>
        <li>
          <ul className="flex">
            <li className="mr-2">
              <a
                href="https://dev.to/jamespotz"
                className="social-link"
                aria-label="dev.to profile"
              >
                <Icon name={["fab", "dev"]} />
              </a>
            </li>
            <li className="mr-2">
              <a
                href="https://github.com/jamespotz"
                className="social-link"
                aria-label="github profile"
              >
                <Icon name={["fab", "github"]} />
              </a>
            </li>
            <li className="mr-2">
              <a
                href="https://facebook.com/jameslrooke"
                className="social-link"
                aria-label="facebook profile"
              >
                <Icon name={["fab", "facebook"]} />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
