import { GitHubIcon, LinkedInIcon, XIcon, HuggingFaceIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Divi Eswar Chowdary",
  initials: "ED",
  location: "Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Andhra+Pradesh/",
  about:
    "Currently Playing with LLMs",
  personalWebsiteUrl: "https://eswardivi.github.io/",
  summary:
    "As an AI Engineer, I specialize at converting ideas into deployable models. I am a Computer Science student specializing in Artificial Intelligence, with a strong academic background. I am particularly interested in computer vision, natural language processing (NLP), and generative AI. I enjoy working on efficient deep learning models and have developed innovative AI solutions throughout my academic career.",
  avatarUrl: "https://avatars.githubusercontent.com/u/76403422?v=4",
  contact: {
    email: "eswar.divi.902@gmail.com",
    tel: null,
    social: [

      {
        name: "GitHub",
        url: "https://github.com/eswardivi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eswardivi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/eswar_divi",
        icon: XIcon,
      },
      {
        name: "Hugging Face",
        url: "https://huggingface.co/eswardivi",
        icon: HuggingFaceIcon,
      }
    ],
  },
  education: [
    {
      school: "Amrita Vishwa Vidyapeetham",
      degree: "Bachelor's Degree in Computer Science with Artificial Intelligence",
      start: "2024",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Schlumberger",
      link: "https://www.slb.com/",
      badges: ["Onsite"],
      title: "Data Scientist",
      start: "2024 July",
      end: "Present",
      description:
        "",
    },
    {
      company: "Schlumberger",
      link: "https://www.slb.com/",
      badges: ["Onsite"],
      title: "Data Scientist Intern",
      start: "2023 June",
      end: "2023 August",
      description:
        "Worked on creating product embeddings using multi-task learning based on RFM attributes.",
    },

  ],
  skills: [
    "Deep Learning: PyTorch, Lightning AI, Transformers",
    "LLMs: Langchain, Llamaindex, Langgraph",
    "Databases: MongoDB, Supabase, Pinecone",
    "Languages: Python,JavaScript, SQL",
    "Frameworks: Streamlit, FastAPI, Gradio"
  ],
  projects: [
    {
      title: "ModelHub",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "React",
        "Node.js",
        "Python",
      ],
      description:
        "ModelHub is a platform for sharing, discovering, and running machine learning models",
      link: {
        label: "github.com",
        href: "https://modelhub.vercel.app/",
      },
    },
    {
      title: "Podcastify",
      techStack: [
        "Python",
        "LLMs",
        "Streamlit"
      ],
      description:
        "Convert a convert articles from URLs into listenable audio Podcasts.",
      link: {
        label: "github.com",
        href: "https://narrateit.streamlit.app/",
      },
    },
    {
      title: "ChatwithPDF",
      techStack: [
        "Python",
        "Chromadb",
        "LLMs",
        "Streamlit",
      ],
      description: "A platform to chat with PDFs",
      link: {
        label: "github.com",
        href: "https://chatwithpdf.streamlit.app/",
      },
    },
  ],
  researchPapers: [
    {
      title: "An analysis of data leakage and generalizability in MRI based classification of Parkinson's Disease using explainable 2D Convolutional Neural Networks",
      date: "2024",
      doilink: "https://doi.org/10.1016/j.dsp.2024.104407",
      description:
        "This paper presents a study on the detection of Parkinson's Disease (PD) from T1-weighted MRI scans using Convolutional Neural Networks (CNNs). The study investigates the potential for bias propagation in CNN models due to data leakage and evaluates the generalizability of the models to external datasets.",
    },
    {
      title: "Transformer-Based Multilingual Automatic Speech Recognition (ASR) Model for Dravidian Languages",
      date: "2024",
      doilink: "https://doi.org/10.1002/9781394214624.ch13",
      description:
        "This paper presents a approach to ASR for Dravidian languages like Tamil and Telugu. It builds upon the strengths of the powerful Whisper model, known for its multilingual capabilities, and fine-tunes it specifically for these under-resourced languages. This approach achieves significant improvements in WER compared to existing models.",
    },
    {
      title: "Going Beyond Traditional Methods: Using LSTM Networks to Predict Rainfall in Kerala.",
      date: "2024",
      doilink: "https://doi.org/10.1007/978-3-031-53717-2_11",
      description:
        "This paper presents an approach to forecast rainfall in Kerala using LSTM models. The study compares the performance of LSTM models with traditional time series forecasting methods and demonstrates the superior accuracy of LSTM models in predicting rainfall in the region.",
    }
  ],

} as const;
