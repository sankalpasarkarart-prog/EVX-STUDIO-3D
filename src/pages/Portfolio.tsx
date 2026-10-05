import { motion } from 'framer-motion';

const portfolioCategories = [
  {
    title: "Real Estate Ads",
    videos: [
      { id: "1224453199", type: "vimeo", format: "vertical" },
      { id: "1224453198", type: "vimeo", format: "vertical" },
    ]
  },
  {
    title: "Motion Graphics",
    videos: [
      { id: "1224453733", type: "vimeo", format: "vertical" },
      { id: "1224453784", type: "vimeo", format: "vertical" },
      { id: "1224453732", type: "vimeo", format: "horizontal" },
      { id: "1232814877", type: "vimeo", format: "horizontal" },
    ]
  },
  {
    title: "Commercial Ads",
    videos: [
      { id: "1224453731", type: "vimeo", format: "vertical" },
      { id: "1224453775", type: "vimeo", format: "vertical" },
      { id: "1224453734", type: "vimeo", format: "vertical" },
    ]
  },
  {
    title: "Colour Grading & Short Films",
    videos: [
      { id: "10O-bZ7h7cJusqfSIfJqrEn7U61cLJ0lX", type: "gdrive", format: "horizontal" },
      { id: "1EPo3JjHjNsmWfpNDOQpW6FQyql-pVLkA", type: "gdrive", format: "horizontal" },
    ]
  },
  {
    title: "Social Media Informational Shorts",
    videos: [
      { id: "1224454234", type: "vimeo", format: "vertical" },
      { id: "1224454252", type: "vimeo", format: "vertical" },
      { id: "1224454450", type: "vimeo", format: "vertical" },
      { id: "1224454451", type: "vimeo", format: "vertical" },
    ]
  }
];

export default function Portfolio() {
  const getEmbedUrl = (video: {id: string, type: string, format: string}) => {
    if (video.type === 'vimeo') return `https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;
    if (video.type === 'gdrive') return `https://drive.google.com/file/d/${video.id}/preview`;
    return "";
  };

  const slideInVar = {
    hidden: { opacity: 0, scale: 0.9, y: 50, rotateX: 15 },
    visible: { opacity: 1, scale: 1, y: 0, rotateX: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 min-h-screen relative z-10" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none -z-10"></div>
      
      <motion.div initial="hidden" animate="visible" variants={slideInVar} className="text-center mb-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-heading font-black text-brandDark mb-6 drop-shadow-sm leading-tight">Our <span className="text-amber-600 font-accentItalic italic text-6xl md:text-8xl font-semibold relative top-2">Portfolio</span></h1>
        <p className="text-slate-800 font-medium max-w-2xl mx-auto text-lg">
          Explore our premium post-production work across various industries. From high-retention shorts to cinematic coloring.
        </p>
      </motion.div>
      
      <div className="space-y-24 relative z-10">
        {portfolioCategories.map((category, idx) => (
          <div key={idx}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-black text-brandDark whitespace-nowrap">{category.title}</h2>
              <div className="h-[2px] bg-amber-200/50 flex-grow shadow-sm"></div>
            </motion.div>
            
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start items-start">
              {category.videos.map((video, vIdx) => (
                <motion.div 
                  key={vIdx}
                  initial={{ opacity: 0, z: -50, y: 50, rotateX: 10 }}
                  whileInView={{ opacity: 1, z: 0, y: 0, rotateX: 0 }}
                  viewport={{ once: false, amount: 0.1, margin: "-50px" }}
                  transition={{ delay: vIdx * 0.1 }}
                  className={`relative rounded-3xl overflow-hidden bg-amber-100/10 backdrop-blur-md border border-amber-200/30 shadow-2xl ${
                    video.format === 'vertical' ? 'w-full max-w-[320px] aspect-[9/16]' : 'w-full lg:w-[calc(50%-1rem)] xl:max-w-[600px] aspect-video'
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <iframe 
                    src={getEmbedUrl(video)} 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                    title={`${category.title} Video ${vIdx + 1}`}
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={slideInVar}
        className="mt-32 text-center bg-amber-100/10 backdrop-blur-md border border-amber-200/30 rounded-3xl p-12 shadow-2xl relative z-10"
      >
        <h3 className="text-2xl md:text-4xl font-heading font-black text-brandDark mb-4">Ready to upgrade your content?</h3>
        <p className="text-slate-800 font-medium mb-8 max-w-xl mx-auto text-lg">Let us bring this level of premium quality to your brand.</p>
        <a href="https://wa.me/919332128501" target="_blank" rel="noreferrer" className="inline-block px-10 py-4 bg-brandDark text-white font-bold font-heading tracking-wide uppercase rounded-full hover:bg-amber-600 transition-colors shadow-xl hover:scale-105">
          Start Your Project Now
        </a>
      </motion.div>
    </div>
  );
}
