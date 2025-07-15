"use client";
// @flow strict

import * as React from 'react';
import { FiGithub, FiExternalLink, FiTag } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';

function ProjectCard({ project }) {

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1224] via-[#0a0d37] to-[#1a1443] border border-[#1b2c68a0] hover:border-[#16f2b3]/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#16f2b3]/10">

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-violet-600/10 to-[#16f2b3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Gradient Border */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-[#16f2b3] to-transparent"></div>
      </div>

      {/* Header */}
      <div className="relative px-6 py-4 border-b border-[#1b2c68a0]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-[#16f2b3] font-semibold text-lg">{project.name}</span>
          </div>

          {/* Category Badge */}
          <div className="flex items-center space-x-1 bg-[#16f2b3]/10 text-[#16f2b3] px-3 py-1 rounded-full text-xs font-medium">
            <FiTag className="w-3 h-3" />
            <span>{project.category}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Project Image/Icon */}
        <div className="relative h-48 bg-gradient-to-br from-[#1a1443] to-[#0d1224] rounded-xl overflow-hidden border border-[#1b2c68a0] group-hover:border-[#16f2b3]/20 transition-colors duration-300">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl text-[#16f2b3]/20 group-hover:text-[#16f2b3]/40 transition-colors duration-300">
                💻
              </div>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <div className="bg-[#16f2b3]/10 text-[#16f2b3] px-2 py-1 rounded-md text-xs font-medium">
              {project.role}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-white font-medium text-sm flex items-center space-x-2">
            <span>Tech Stack</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.slice(0, 6).map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#1a1443]/50 text-[#16f2b3] text-xs rounded-full border border-[#16f2b3]/20 hover:border-[#16f2b3]/40 transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 6 && (
              <span className="px-3 py-1 bg-[#1a1443]/50 text-gray-400 text-xs rounded-full border border-gray-600">
                +{project.tools.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#16f2b3] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#16f2b3] text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
              <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#1a1443] hover:bg-[#1f1d5a] text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 border border-[#16f2b3]/20 hover:border-[#16f2b3]/40 group"
            >
              <FiGithub className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#16f2b3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;