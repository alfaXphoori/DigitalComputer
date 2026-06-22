# Project: DigitalComputer Course Website

## Architecture
This repository is a Jekyll + GitHub Pages course website for **ตรรกศาสตร์ของดิจิตอลคอมพิวเตอร์ (Digital Computer Logic)**. The site provides a public course home page, a full weekly lesson plan, 10 theoretical chapters, and 15 laboratory sheets for first-year computer engineering students.

## Course Scope
The content covers number systems, logic gates, Boolean algebra, Karnaugh maps, Quine-McCluskey tabulation, combinational arithmetic circuits, decoders/encoders/multiplexers, tristate buses and timing, sequential circuits, flip-flops, counters, registers, and introductory FSM design.

## Milestones
| # | Name | Scope | Status |
|---|---|---|---|
| 1 | Site scaffold | `_config.yml`, layouts, includes, CSS, home page | DONE |
| 2 | Core learning plan | `weekly-lesson-plan.md`, CLO/LLO mapping, assessment | DONE |
| 3 | Theory chapters | 10 chapter directories under `chapters/` | DONE |
| 4 | Laboratory sheets | 15 lab worksheets under `labs/` | DONE |
| 5 | Validation | Internal links and Jekyll build readiness | DONE |

## Code Layout

```text
DigitalComputer/
├── _config.yml
├── _includes/
│   ├── head.html
│   ├── header.html
│   └── footer.html
├── _layouts/
│   ├── default.html
│   └── home.html
├── assets/css/style.css
├── chapters/
│   ├── ch01-number-systems/README.md
│   ├── ch02-logic-gates/README.md
│   ├── ch03-boolean-algebra/README.md
│   ├── ch04-karnaugh-map/README.md
│   ├── ch05-tabulation-method/README.md
│   ├── ch06-combinational-arithmetic/README.md
│   ├── ch07-decoder-encoder-mux/README.md
│   ├── ch08-tristate-timing/README.md
│   ├── ch09-sequential-flipflop/README.md
│   └── ch10-counter-register/README.md
├── labs/
│   └── lab01-...md ถึง lab15-...md
├── index.html
├── weekly-lesson-plan.md
└── README.md
```

## Content Guidelines

- Thai academic prose suitable for first-year students.
- Every chapter includes theory, worked examples, tables, ASCII/Mermaid-style diagrams, and engineering context.
- Every lab follows objective → short theory → procedure → recording table → questions → submission checklist.
- Internal links use GitHub Pages/Jekyll-compatible relative paths.
