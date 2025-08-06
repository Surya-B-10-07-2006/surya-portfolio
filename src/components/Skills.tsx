import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, PenTool as Tool } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  color: string;
}

const SkillBar: React.FC<{ skill: Skill; isVisible: boolean; delay: number }> = ({ 
  skill, 
  isVisible, 
  delay 
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium flex items-center">
          <span className="text-lg mr-2">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-teal-600 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'JavaScript', level: 85, icon: '🔥' },
        { name: 'C Programming', level: 90, icon: '⚡' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'TypeScript', level: 70, icon: '💎' },
      ],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'teal',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'React', level: 80, icon: '⚛️' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Tool,
      color: 'orange',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Git', level: 80, icon: '🔧' },
        { name: 'GitHub', level: 85, icon: '🐙' },
        { name: 'npm', level: 75, icon: '📦' },
      ],
    },
    {
      title: 'Data Analytics',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'Power BI', level: 80, icon: '📊' },
        { name: 'Data Analysis', level: 75, icon: '📈' },
        { name: 'NumPy', level: 65, icon: '🔢' },
        { name: 'Pandas', level: 70, icon: '🐼' },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-800">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-${category.color}-100 rounded-lg mr-4`}>
                    <Icon className={`text-${category.color}-600`} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      isVisible={isVisible}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;