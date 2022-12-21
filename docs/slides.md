---
theme: seriph

highlighter: shiki

lineNumbers: false

colorSchema: 'light'

info: |
  ## zauberAI - Introduction on improving development productivity with artificial intelligence

layout: image-right
image: https://source.unsplash.com/U3sOwViXhkY/800x600
class: left-column
---

# ZauberAI (frontend future?)

## Introduction on improving development productivity with artificial intelligence

> Programming has two parts to it: <br /><br />
> **‘think hard about a problem and try to understand it’** and <br /><br />
> **‘map those small pieces into existing code**’.<br /><br />
> The second part is tedious, but it’s what Codex is best at.<br /><br />
> <small>--<cite>Greg Brockman, CTO OpenAI</cite></small>

<!--
Presenter Notes ...
-->

---
layout: center
class: center-all
---

# GPT-3

## all over the media these days ...

<img alt="GPT-3 A million in less than a week" src="/images/twitter.jpg" class="m-10 h-60" />


---
layout: default
---

# What is GPT-3?

## Generative Pre-trained Transformer 3

- developed by OpenAI
- autoregressive language model
- uses deep learning
- trained on 175 billion parameters
- API, different models available

## Applications

- Codex, CoPilot, ... > code generation
- CodexDB > query generation based on natural language
- copy.ai, jasper.ai, writesonic.com, rytr.com > text generation
- Excelformulabot > Excel formula generation from natural language
- chat bots
- ...

<!-- presenter notes --->



---
layout: default
---

# short thought of AI use cases
## In which areas can an AI for priorIT support developers?

- writing code (HTML, CSS, Javascript / TypeScript, SQL, Java, ...)
- analyzing and reviewing code (does code apply to solid principles?)
- debugging
- help / reference
- research, learning & documentation
- form- / UI builder

## Where could AI extend our product portfolio?

- natural language search (e.g. text input filling 80-something science search fields)
- recognizing and analyzing unusual activity
- trend detection (text classification)
- end-user-help (chat bots)
- ...


<!-- presenter notes --->

---

# AI limitations

## examples from the codex AI model

- not yet able to understand code in its entirety (generating vs understanding code)
- not yet good enough to assist with complex functions
- trained via GitHub, can provide mediocre code quality (can be disabled)
- relying too much on codex produced code without human review
- copyright issues not yet fully legally judged (trained by GitHub code ..., can be disabled)
- personal and sensitive information leaks through code? (using public AI systems)

## assist, don't replace

- all of the above limitations are being worked on
- we should not forget that AI is not a replacement for human developers, but rather a tool to assist them
- although all its limitations, AI can still be a great help to developers and a big productivity booster
- many big companies are already using AI to assist their developers


<!-- presenter notes --->

---
layout: center
---
# selected AI tools

## worth to give it a shot

---
layout: two-cols
---

## code generation tools

- <small>&#128279;</small> [CoPilot AI Pair Programmer](https://github.com/features/copilot)
  - GitHub, Microsoft
- <small>&#128279;</small> [Codex OpenAI model](https://openai.com/blog/codex/)
  - API used by CodePilot
- <small>&#128279;</small> [GPT-3 Chat](https://chat.openai.com/chat)
  - chat with a large language model trained by OpenAI
- <small>&#128279;</small> [tabnine](https://www.tabnine.com/)
  - AI based code completion
  - hosted or local version
  - custom, spezialized, self-trained models
  - clear self-owned copyright license
- <small>&#128279;</small> [GhostWriter](https://replit.com/site/ghostwriter)
  - code generation, suggestions, refactoring, explanations
- <small>&#128279;</small> [K-Explorer AI](https://k-explorer.com)

::right::

## other AI tools

- <small>&#128279;</small> [CodexDB](https://codexdb.ai/)
  - query generation based on natural language  
- <small>&#128279;</small> [Microsoft sketch2code](https://www.microsoft.com/en-us/ai/ai-lab-sketch2code)
  - convert hand-written drawings to working HTML prototypes
- code generation from UI design
  - <small>&#128279;</small> [teleporthq](https://teleporthq.io/)
  - <small>&#128279;</small> [zecoda](https://zecoda.com/)
  - <small>&#128279;</small> [animaap](https://www.animaapp.com/)
  - <small>&#128279;</small> [locofy](https://www.locofy.ai/)

## could be custom built

- Figma to Angular Page / Form Component
- custom UI builder (https://mui.com/ to react)

<!-- Presenter Notes ... --->

---
layout: center
---

# let's see some examples

<!-- Presenter Notes ... --->

---

# GitHub Copilot

<br />
<br />

## Angular example

<br />
<br />

- create Accounts Model
- create Accounts Service
- Accounts Component: Observable loading accounts via service
- Accounts Component: create html table with accounts
- calculate Service: REGEX
- calculate Service: Observables / Streams

<!-- Presenter Notes ... --->

---

# OpenAI GPT-3 Chat

- Quicksearch Algorithm
- Sorting multi-dimensional Arrays in typescript with typed code examples
- [Stack Overflow Example](https://stackoverflow.com/questions/66835273/looking-to-optimize-a-typescript-function)
  - simplify and optimize typescript function
  - SOLID principles or clean code principles
- Angular Auxiliary Routes
- adding data to routes in Angular
- Angular Change Detection
- Angular ngFor optimization
- add cypress command for intercepting and managing all outgoing requests
- 15 REST API best practices
- ...


<!-- Presenter Notes ... --->

---

# Vision - automate repetetive tasks

## Frontend

- definition of design system
- definition of UI model
- technology / framework agnostic
- mostly generic, AI aided code generation
- mostly generic UI generation
- software lifecycle independent from technology / framework

## Backend
- definition of data model
- AI aided database management
- AI aided code generation for REST services, gRPC services, cloud functions, ...
- focus on business logic

---
layout: two-cols
---

# summary of intended use:

<br /><br />

- ## aid code generation<br /><br />

- ## aid code debugging<br /><br />

- ## aid code review and analysis<br /><br />

- ## help / reference<br /><br />

- ## research, learning & documentation<br /><br />

- ## form- / UI builder<br /><br />

::right::

# increased productivity

<br /><br />

- ## natural language search (e.g. text input filling 80-something science search fields)<br /><br />
- ## recognizing and analyzing unusual activity<br /><br />
- ## trend detection (text classification)<br /><br />

- ## end-user-help (intelligent chat bots and wizards)<br /><br />

- ...


---
layout: two-cols
---

# interesting reads

<style>
  li { font-size: 0.6em; margin-bottom: 0.8em !important; }
</style>


- [European Artifical Intelligence Act](https://artificialintelligenceact.eu/)
- [Application of Deep Learning in Front-end Web Development (HTML + CSS)](https://becominghuman.ai/application-of-deep-learning-in-front-end-web-development-html-css-b7ef744705f3)
- [What’s the Difference Between Deep Learning Training and Inference?](https://blogs.nvidia.com/blog/2016/08/22/difference-deep-learning-training-inference-ai/)
- [How you can train an AI to convert your design mockups into HTML and CSS](https://www.freecodecamp.org/news/how-you-can-train-an-ai-to-convert-your-design-mockups-into-html-and-css-cc7afd82fed4)
- [pix2code paper: Generating Code from a Graphical User Interface Screenshot](https://arxiv.org/pdf/1705.07962.pdf)
- [Sketching Interfaces - Generating code from low fidelity wireframes](https://airbnb.design/sketching-interfaces/)
- [Automated front-end development using deep learning](https://blog.insightdatascience.com/automated-front-end-development-using-deep-learning-3169dd086e82)
- [ChatGPT: Optimizing Language Models for Dialogue](https://openai.com/blog/chatgpt/)
- [Characteristics and limitations of Azure OpenAI Service](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/characteristics-and-limitations)
- [Copilot: GitHub’s AI Tool Speeds Up Development, but Comes with Risks](https://rewind.com/blog/copilot-github-ai-tool-security-risks/)
- [Is GitHub Copilot A Threat To Developers?](https://blog.openreplay.com/is-github-copilot-a-threat-to-developers/)
- [ChatGPT schummelt: Erfindet Quellen, die gar nicht existieren](https://futurezone.at/science/chatgpt-wissenschaft-forschung-quellen-universitaet-fake-news/402255681)
- [Risk Assessment of GitHub Copilot](https://gist.github.com/0xabad1dea/be18e11beb2e12433d93475d72016902)
- [Is GitHub Copilot a blessing, or a curse?](https://gist.github.com/0xabad1dea/be18e11beb2e12433d93475d72016902)
- [The Alarming Deceptions at the Heart of an Astounding New Chatbot](https://slate.com/technology/2022/12/davinci-003-chatbot-gpt-wrote-my-obituary.html)

::right::

# &nbsp;


---
layout: center
---

# Thank you for your attention!


<!-- Presenter Notes ... --->