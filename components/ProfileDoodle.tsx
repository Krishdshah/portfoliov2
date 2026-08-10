"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const orangeBlobPaths = [
  "M175 188 C204 137 258 135 299 158 C337 179 362 151 397 166 C438 184 447 227 428 263 C412 293 438 327 421 365 C400 411 351 420 310 398 C273 378 242 403 207 382 C169 360 164 317 179 283 C194 250 154 224 175 188Z",
  "M184 175 C218 142 248 122 306 150 C345 166 376 154 389 170 C428 188 448 218 422 268 C406 298 426 330 426 356 C406 404 359 426 306 404 C269 384 236 412 201 390 C162 366 157 308 171 274 C185 240 158 208 184 175Z",
  "M166 196 C193 130 266 140 287 163 C329 183 354 142 401 155 C444 175 436 230 435 256 C419 286 441 318 416 368 C393 416 346 410 316 390 C279 370 249 394 213 374 C175 352 167 320 181 286 C195 252 146 228 166 196Z",
  "M171 183 C201 138 259 128 301 158 C337 172 364 154 389 166 C429 180 439 222 429 263 C415 293 429 328 412 363 C392 410 342 413 302 393 C265 372 235 396 200 376 C162 353 158 310 172 276 C186 243 148 218 171 183Z",
  "M175 188 C204 137 258 135 299 158 C337 179 362 151 397 166 C438 184 447 227 428 263 C412 293 438 327 421 365 C400 411 351 420 310 398 C273 378 242 403 207 382 C169 360 164 317 179 283 C194 250 154 224 175 188Z"
];

const secondaryPaperPaths = [
  "M135 258 C150 196 202 145 270 130 C343 114 420 143 461 201 C502 258 499 338 458 399 C416 462 334 488 263 464 C192 440 143 384 132 321 C128 298 130 276 135 258Z",
  "M140 252 C156 190 208 140 276 126 C349 110 425 138 466 195 C507 252 503 332 462 393 C420 456 338 482 267 458 C196 434 147 378 136 315 C132 292 134 270 140 252Z",
  "M130 264 C144 202 196 150 264 135 C337 118 414 148 455 206 C496 264 493 344 452 405 C410 468 328 494 257 470 C186 446 138 390 127 327 C123 304 125 282 130 264Z",
  "M135 258 C150 196 202 145 270 130 C343 114 420 143 461 201 C502 258 499 338 458 399 C416 462 334 488 263 464 C192 440 143 384 132 321 C128 298 130 276 135 258Z"
];

export default function ProfileDoodle() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative SVG provided by user */}
      <svg
        viewBox="0 0 620 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0 overflow-visible"
      >
        <defs>
          {/* Soft paper texture */}
          <filter id="paperShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="18"
              floodColor="#2B2926"
              floodOpacity="0.08"
            />
          </filter>

          {/* Orange blob */}
          <filter id="blobShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="12"
              floodColor="#E86F2D"
              floodOpacity="0.15"
            />
          </filter>

          {/* Dot pattern */}
          <pattern
            id="dots"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.6"
              fill="#22201E"
              fillOpacity="0.22"
            />
          </pattern>

          {/* Arrow */}
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="7"
            refY="5"
            orient="auto"
          >
            <path
              d="M0 0L10 5L0 10"
              fill="none"
              stroke="#22201E"
              strokeWidth="1.5"
            />
          </marker>

          {/* Small orange arrow */}
          <marker
            id="orangeArrow"
            markerWidth="9"
            markerHeight="9"
            refX="7"
            refY="4.5"
            orient="auto"
          >
            <path
              d="M0 0L9 4.5L0 9"
              fill="none"
              stroke="#E86F2D"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* BACKGROUND PAPER CIRCLE */}
        <circle
          cx="315"
          cy="300"
          r="245"
          fill="#E9E3D8"
          fillOpacity="0.45"
          filter="url(#paperShadow)"
        />

        <circle
          cx="315"
          cy="300"
          r="215"
          fill="#F5F0E7"
          fillOpacity="0.85"
        />

        {/* FLUID GEL ORANGE ORGANIC SHAPE */}
        <motion.path
          d={orangeBlobPaths[0]}
          fill="#E86F2D"
          fillOpacity="0.92"
          filter="url(#blobShadow)"
          animate={{
            d: orangeBlobPaths,
            scale: isHovered ? [1, 1.04, 1.02, 1.05] : 1,
            rotate: isHovered ? [0, 1.5, -1.5, 0] : 0,
          }}
          transition={{
            d: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: isHovered ? 3.5 : 8,
              ease: "easeInOut",
            },
            scale: {
              repeat: isHovered ? Infinity : 0,
              repeatType: "reverse",
              duration: 2.5,
              ease: "easeInOut",
            },
            rotate: {
              repeat: isHovered ? Infinity : 0,
              duration: 3,
              ease: "easeInOut",
            },
          }}
          style={{ transformOrigin: "300px 280px" }}
        />

        {/* SECONDARY PAPER SHAPE WITH FLUID GEL LAG */}
        <motion.path
          d={secondaryPaperPaths[0]}
          fill="#FFFDF8"
          fillOpacity="0.34"
          animate={{
            d: secondaryPaperPaths,
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{
            d: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: isHovered ? 4.5 : 10,
              ease: "easeInOut",
            },
            scale: {
              type: "spring",
              stiffness: 150,
              damping: 15,
            },
          }}
          style={{ transformOrigin: "300px 280px" }}
        />

        {/* DOT MATRIX */}
        <rect
          x="45"
          y="65"
          width="150"
          height="130"
          fill="url(#dots)"
          opacity="0.8"
        />

        <rect
          x="420"
          y="410"
          width="130"
          height="120"
          fill="url(#dots)"
          opacity="0.45"
        />

        {/* BIG HAND-DRAWN ORBIT */}
        <motion.path
          d="
            M82 321
            C95 183 211 88 346 103
            C486 118 555 232 519 350
            C484 466 346 528 221 482
            C127 447 73 385 82 321Z
          "
          stroke="#24211E"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
          animate={{
            rotate: isHovered ? [0, 2, -1, 0] : 0,
          }}
          transition={{
            duration: 4,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "300px 300px" }}
        />

        {/* SECOND ORBIT */}
        <path
          d="
            M158 459
            C255 534 416 500 493 405
          "
          stroke="#24211E"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="5 7"
          fill="none"
          markerEnd="url(#arrow)"
        />

        {/* TOP RIGHT HAND-DRAWN RAYS */}
        <motion.g
          stroke="#E86F2D"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{
            scale: isHovered ? [1, 1.15, 1] : 1,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "500px 80px" }}
        >
          <path d="M475 75L481 94" />
          <path d="M501 66L500 87" />
          <path d="M524 82L510 97" />
          <path d="M535 105L517 112" />
        </motion.g>

        {/* LITTLE STAR */}
        <path
          d="
            M88 205
            L94 221
            L111 225
            L96 231
            L92 248
            L86 232
            L69 227
            L85 221Z
          "
          fill="#24211E"
        />

        {/* SMALL ORANGE STAR */}
        <path
          d="
            M466 165
            L471 176
            L483 181
            L472 185
            L467 198
            L462 186
            L450 181
            L462 176Z
          "
          fill="#E86F2D"
        />

        {/* HAND DRAWN CIRCLE */}
        <path
          d="
            M492 470
            C519 449 557 457 569 486
            C581 515 559 549 528 553
            C496 557 468 535 469 505
            C469 491 477 478 492 470Z
          "
          stroke="#24211E"
          strokeWidth="2"
          fill="#F7F1E7"
          fillOpacity="0.9"
        />

        {/* LITTLE ARROW */}
        <path
          d="M510 435 C535 419 550 403 557 380"
          stroke="#E86F2D"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#orangeArrow)"
        />

        {/* BOTTOM DOODLE LOOP ARROW */}
        <path
          d="M 440,515 C 380,540 310,545 270,515 C 235,485 265,455 295,480 C 325,505 250,555 130,525"
          stroke="#24211E"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="6 5"
          fill="none"
        />
        {/* Arrow head pointing left */}
        <path
          d="M 142,516 L 128,525 L 140,536"
          stroke="#24211E"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* SMALL CROSS MARK */}
        <g
          stroke="#24211E"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M120 105L134 119" />
          <path d="M134 105L120 119" />
        </g>

        {/* TINY ORANGE HAND-DRAWN UNDERLINE */}
        <path
          d="M398 535 C425 539 451 537 473 531"
          stroke="#E86F2D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Centered Cutout Profile Image with subtle gel float */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        animate={{
          y: isHovered ? [-2, 2, -2] : 0,
        }}
        transition={{
          duration: 3,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/profile-cutout.png"
          alt="Krish D Shah"
          className="w-[72%] h-[82%] object-contain translate-y-[2%] transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </motion.div>

      {/* Sticky Note Card (bottom-right) */}
      <motion.div
        className="absolute bottom-[2%] right-[-1%] z-20 max-w-[210px] sm:max-w-[235px] pointer-events-auto"
        animate={{
          rotate: isHovered ? 0 : 3,
          scale: isHovered ? 1.04 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 15,
        }}
      >
        <div className="relative bg-[#EFEBE4] dark:bg-[#2A2724] border border-[#E0D8CE] dark:border-[#3D3833] rounded-xl p-4 sm:p-4.5 shadow-xl text-[#2B2926] dark:text-[#EDE8E1]">
          {/* Pink Washi Tape at top center */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-[#E88FA2]/70 dark:bg-[#E88FA2]/60 backdrop-blur-[1px] rotate-[-2deg] shadow-xs rounded-xs pointer-events-none" />

          {/* Mono font text lines */}
          <div className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase leading-tight space-y-1 opacity-90">
            <div>AI/ML ENTHUSIAST</div>
            <div>FULL-STACK BUILDER</div>
            <div>PROBLEM SOLVER</div>
          </div>

          {/* Cursive script text + double underline */}
          <div className="mt-2.5 relative inline-block">
            <span className="font-script text-xl sm:text-2xl text-[#E86F2D] font-normal leading-none">
              Always building.
            </span>
            {/* Hand-drawn double underline */}
            <svg
              className="w-full h-2.5 text-[#E86F2D] overflow-visible mt-0.5"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 0,3 C 25,7 50,1 75,5 C 85,6 95,2 100,4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 8,7 C 35,5 65,8 92,6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
