import Sidebar from '../components/Sidebar';
import AboutComp from '../components/AboutComp';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from "../router/router";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About
})

function About() {
  return (
    <div className="flex">
        <Sidebar highlight='about' />
        <AboutComp />
    </div>
  )
}

export default About