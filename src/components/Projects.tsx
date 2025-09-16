import React from 'react';
import { ExternalLink, Github, Database, BarChart3, Shield, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Real-time Analytics Platform",
      description: "Built a comprehensive real-time analytics platform processing 10M+ events per minute with sub-second latency. Features include real-time dashboards, anomaly detection, and automated alerting.",
      image: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Apache Kafka", "Apache Spark", "Redis", "Grafana", "Python", "Kubernetes"],
      metrics: ["10M+ events/min", "Sub-second latency", "99.9% uptime"],
      icon: <Zap className="w-6 h-6" />,
      category: "Real-time Processing"
    },
    {
      title: "Enterprise Data Lake",
      description: "Designed and implemented a petabyte-scale data lake supporting 200+ data sources. Includes automated data cataloging, lineage tracking, and self-service analytics capabilities.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AWS S3", "AWS Glue", "Apache Atlas", "Tableau", "Spark", "Airflow"],
      metrics: ["1PB+ storage", "200+ data sources", "50+ teams served"],
      icon: <Database className="w-6 h-6" />,
      category: "Data Architecture"
    },
    {
      title: "ML Pipeline Automation",
      description: "Created end-to-end MLOps pipeline with automated model training, validation, and deployment. Reduced model deployment time from weeks to hours with integrated monitoring.",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["MLflow", "Kubernetes", "Docker", "Jenkins", "Python", "TensorFlow"],
      metrics: ["80% faster deployment", "95% automation", "24/7 monitoring"],
      icon: <BarChart3 className="w-6 h-6" />,
      category: "Machine Learning"
    },
    {
      title: "Data Governance Framework",
      description: "Implemented comprehensive data governance framework with automated data quality monitoring, privacy compliance, and access controls across the enterprise.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Apache Atlas", "Collibra", "Apache Ranger", "AWS IAM", "Python", "SQL"],
      metrics: ["100% GDPR compliance", "60% data quality improvement", "Zero security incidents"],
      icon: <Shield className="w-6 h-6" />,
      category: "Data Governance"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of enterprise-scale data solutions that drive business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="text-cyan-400">{project.icon}</div>
                  <span className="bg-gray-900/80 backdrop-blur-sm text-cyan-400 px-2 py-1 rounded text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Metrics</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="text-sm">View Details</span>
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-sm">Source Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;