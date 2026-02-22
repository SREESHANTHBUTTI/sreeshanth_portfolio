'use client'

export default function SummarySkillsCard() {
  const skills = [
    { title: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'C/C++'] },
    { title: 'ML & AI', items: ['Scikit-learn', 'Predictive Models', 'Model Evaluation', 'Feature Engineering'] },
    { title: 'Deep Learning', items: ['PyTorch', 'TensorFlow', 'Keras'] },
    { title: 'GenAI & NLP', items: ['LLMs', 'RAG', 'LangChain', 'HuggingFace', 'Prompt Engineering'] },
    { title: 'Frontend', items: ['React.js', 'Hooks', 'API Integration'] },
    { title: 'Cloud & Infra', items: ['AWS', 'Azure', 'Linux', 'Kubernetes'] },
    { title: 'Data Tools', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
    { title: 'Dev Tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter'] },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="p-8 md:p-12">
          <h2 className="section-title">Summary</h2>

          <p className="text-gray-300 text-base leading-relaxed mb-12 max-w-4xl">
            AI / ML Developer with strong proficiency in Python and machine learning, and hands-on experience 
            in NLP, LLM-based systems, and speech processing. Experienced in building transformer-based models, 
            RAG pipelines, and applied ML solutions, and integrating them into real-time, scalable applications 
            using modern backend and cloud tools. Skilled in data preprocessing, model evaluation, and end-to-end 
            ML system development across Linux and cloud environments.
          </p>

          <h3 className="text-2xl font-bold text-white mb-8">Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-gradient-to-br from-sanguine-700/10 to-transparent border border-sanguine-700/30 rounded-lg p-6 hover:border-sanguine-700/60 hover:from-sanguine-700/20 transition-all"
              >
                <h4 className="font-semibold text-sanguine-400 mb-4">{skill.title}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-sanguine-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
