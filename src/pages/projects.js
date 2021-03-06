import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/icon"

const ProjectsPage = () => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0)" },
    from: { opacity: 0.1, transform: "translateX(-100%)" },
  })
  return (
    <Layout>
      <SEO title="Work Experience" />
      <div className="flex flex-col">
        <Link to="/" className="btn mb-4 self-start">
          back
        </Link>
        <animated.ul style={props}>
          <li className="flex flex-col lg:flex-row lg:items-center mb-4 lg:mb-2">
            <a
              href="https://jamespotz.github.io/pokemon-league-registration/"
              alt="Pokemon League Registration"
              className="btn-no-uppercase font-bold self-start lg:selt-auto"
            >
              Pokemon League Registration
              <Icon
                name="external-link-alt"
                className="ml-2 text-gray-500 lg:hidden"
              />
            </a>
            <span className="text-lg font-default text-gray-800 lg:ml-2 lg:border-l-2 lg:pl-2 lg:border-purple-800">
              A simple pokemon registration built with ReactJs, Lodash,
              TailwindCSS, postCSS, Redux and React Hooks.
            </span>
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center mb-4 lg:mb-2">
            <a
              href="https://npmjs.com/package/@jamespotz/react-simple-readmore"
              alt="@jamespotz/react-simple-readmore"
              className="btn-no-uppercase font-bold self-start lg:selt-auto"
            >
              @jamespotz/react-simple-readmore
              <Icon
                name="external-link-alt"
                className="ml-2 text-gray-500 lg:hidden"
              />
            </a>
            <span className="text-lg font-default text-gray-800 lg:ml-2 lg:border-l-2 lg:pl-2 lg:border-purple-800">
              A simple react readmore using physics for animation.
            </span>
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center mb-4 lg:mb-2">
            <a
              href="https://www.npmjs.com/package/@jamespotz/ckeditor5-build-with-base64-adapter"
              alt="@jamespotz/ckeditor5-build-with-base64-adapter"
              className="btn-no-uppercase font-bold self-start lg:selt-auto"
            >
              @jamespotz/ckeditor5-build-with-base64-adapter
              <Icon
                name="external-link-alt"
                className="ml-2 text-gray-500 lg:hidden"
              />
            </a>
            <span className="text-lg font-default text-gray-800 lg:ml-2 lg:border-l-2 lg:pl-2 lg:border-purple-800">
              The classic editor build for CKEditor 5 with Base64 adapter for
              converting image's to base64.
            </span>
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center mb-4 lg:mb-2">
            <a
              href="https://github.com/jamespotz/pomodoro-react"
              alt="Pomodoro Timer"
              className="btn-no-uppercase font-bold self-start lg:selt-auto"
            >
              Pomodoro Timer
              <Icon
                name="external-link-alt"
                className="ml-2 text-gray-500 lg:hidden"
              />
            </a>
            <span className="text-lg font-default text-gray-800 lg:ml-2 lg:border-l-2 lg:pl-2 lg:border-purple-800">
              Pomodoro Timer built with React and Electron
            </span>
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center mb-4 lg:mb-2">
            <a
              href="https://github.com/jamespotz/rails_svg_tag_helper"
              alt="Rails SVG tag helper"
              className="btn-no-uppercase font-bold self-start lg:selt-auto"
            >
              Rails SVG tag helper
              <Icon
                name="external-link-alt"
                className="ml-2 text-gray-500 lg:hidden"
              />
            </a>
            <span className="text-lg font-default text-gray-800 lg:ml-2 lg:border-l-2 lg:pl-2 lg:border-purple-800">
              A simple Rails helper for displaying SVG files.
            </span>
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center mb-4 lg:mb-2">
            <a
              href="https://github.com/jamespotz/simple_calendar"
              alt="Simple Ruby Calendar"
              className="btn-no-uppercase font-bold self-start lg:selt-auto"
            >
              Simple Ruby Calendar
              <Icon
                name="external-link-alt"
                className="ml-2 text-gray-500 lg:hidden"
              />
            </a>
            <span className="text-lg font-default text-gray-800 lg:ml-2 lg:border-l-2 lg:pl-2 lg:border-purple-800">
              A simple ruby library for creating calendar in Rails views.
            </span>
          </li>
        </animated.ul>
      </div>
    </Layout>
  )
}

export default ProjectsPage
