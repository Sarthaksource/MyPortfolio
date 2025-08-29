import brightCastImg from '../assets/projects/brightCast.png';
import trailheadImg from '../assets/projects/trailhead.png';
import imageClassificationImg from '../assets/projects/imageClassification.png';
import audioClassificationImg from '../assets/projects/audioClassification.png';
import selfDrivingCarImg from '../assets/projects/selfDrivingCar.png';

export const education = [
  { degree: 'B.Tech in Computer Science', institution: 'Graphic Era University Dehradun', year: '2022-Present', gpa: '85.30%' },
  { degree: '12th, C.B.S.E', institution: 'D.A.V Public School', year: '2022', gpa: '88.50%' },
  { degree: '10th, C.B.S.E', institution: 'D.A.V Public School', year: '2020', gpa: '82.30%' }
];

export const projects = [
  { id: '0', name: 'Self Driving Car', description: 'A self driving car simulation using Neural Networks in JS', imageUrl: selfDrivingCarImg, github: "https://github.com/Sarthaksource/SelfDrivingCar", live: "https://selfdc.netlify.app/" },
  { id: '1', name: 'Sports Person Classifier', description: 'A Image Classifier using Machine Learning (SVM)', imageUrl: imageClassificationImg, github: "https://github.com/Sarthaksource/Sports-Person-Classification", live: "https://imageclassificationfrontend-os57.onrender.com/" },
  { id: '2', name: 'Audio Classifier', description: 'An Audio Classifier made using Machine Learning (SVM)', imageUrl: audioClassificationImg, github: "https://github.com/Sarthaksource/AudioClassification", live: "https://audioclassificationfrontend.onrender.com/" },
  { id: '3', name: '♻️ RePlastix Innovations – Salesforce CRM Project', description: 'Salesforce CRM optimizing plastic recycling through automated waste collection, inventory, restock and order tracking', imageUrl: trailheadImg, github: "https://github.com/Sarthaksource/RePlastixInnovations" },
  { id: '4', name: 'BrightCast', description: 'A weather dashboard designed to provide essential weather information', imageUrl: brightCastImg, github: "https://github.com/Sarthaksource/BrightCast", live: "https://brightcast.netlify.app/" }
];

export const experience = [
  {
    position: 'Salesforce Developer Intern',
    company: 'Salesforce',
    period: 'May 2025 - July 2025',
    description: [
      'Completed an 8-week internship focused on Salesforce development and deployment',
      'Completed 80+ Salesforce badges and modules, earning 113,000+ points while mastering advanced development techniques',
      'Built custom apps using Apex, Visualforce, and Lightning Web Components (LWC)',
      'Maintained a 100% certification success rate, further strengthening expertise in Salesforce solutions'
    ]
  }
];

export const achievements = [
  { title: 'Hall of Fame - AlgoUniversity', certificate: 'https://gamy-gruyere-3e3.notion.site/Hall-of-Fame-f5c00afebf74421d92b9fca371c7aa27' },
  { title: 'Certified Salesforce Developer - Salesforce', certificate: '/certificates/salesforce.pdf' },
  { title: 'Hack-o-Holic Certificate - CoDev Club', certificate: '/certificates/hackoholic.pdf' },
  { title: 'Full Stack Developer Bootcamp - GeeksForGeeks', certificate: '/certificates/fullstack.pdf' },
  { title: 'Android Mobile Application Development - SWAYAM', certificate: '/certificates/android.pdf' },
  { title: 'C++ Course - GeeksForGeeks', certificate: '/certificates/cpp.pdf' },
  { title: 'Ethical Hacking - SWAYAM', certificate: '/certificates/ethical.pdf' },
];
