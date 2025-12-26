import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Star, 
  Calendar, 
  MessageCircle, 
  HeartHandshake, 
  ShieldCheck, 
  MapPin,
  Instagram,
  ArrowRight
} from 'lucide-react';

import { 
  HERO_IMAGE, 
  ABOUT_IMAGE, 
  RESULTS_GALLERY, 
  BACKSTAGE_GALLERY, 
  EXPERT_INFO,
  WHATSAPP_LINK
} from './constants';
import { Button } from './components/Button';
import { Lightbox } from './components/Lightbox';
import { Section } from './components/Section';

const App: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (src: string) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-light selection:bg-brand-accent selection:text-white pb-20 md:pb-0">
      
      {/* 1. HERO SECTION */}
      <div className="relative min-h-[90vh] md:min-h-screen flex items-center bg-brand-dark overflow-hidden py-12 md:py-0">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-l from-brand-primary/20 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            
            {/* Text Content - Order 1 on Mobile/Desktop (Top/Left) */}
            <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left order-1">
              <span className="inline-block px-3 py-1 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent rounded-full text-xs font-bold tracking-widest uppercase mb-2 backdrop-blur-sm">
                Biomédica Esteta • Vila Velha
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium leading-tight text-white drop-shadow-lg">
                Eu sou <span className="text-brand-accent italic">{EXPERT_INFO.name}</span>
              </h1>
              
              {/* Image Mobile Only - Between Title and Description for flow */}
              <div className="md:hidden flex justify-center py-4">
                 <div className="relative w-64 aspect-[3/4]">
                    <div className="absolute -inset-3 border-2 border-brand-accent/30 rounded-2xl transform rotate-3"></div>
                    <div className="absolute -inset-3 bg-brand-accent/10 rounded-2xl transform -rotate-2"></div>
                    <img 
                      src={HERO_IMAGE} 
                      alt={EXPERT_INFO.name} 
                      className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
                    />
                 </div>
              </div>

              <p className="text-lg text-stone-300 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                Realce sua beleza natural com segurança e elegância. Agende sua avaliação e descubra a melhor versão de você mesma.
              </p>
              <div className="pt-2 flex justify-center md:justify-start">
                <Button text="Agendar consulta no WhatsApp" />
              </div>
            </div>

            {/* Framed Image - Desktop Only (Right Side) */}
            <div className="hidden md:flex w-full md:w-1/2 justify-center order-2">
              <div className="relative w-80 lg:w-96 aspect-[3/4]">
                {/* Frame Effect - Matching 'About' section vibe but premium for Hero */}
                <div className="absolute -inset-4 border-2 border-brand-accent/30 rounded-2xl transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6"></div>
                <div className="absolute -inset-4 bg-brand-accent/10 rounded-2xl transform -rotate-2 transition-transform duration-700 hover:-rotate-4"></div>
                
                {/* Main Image */}
                <img 
                  src={HERO_IMAGE} 
                  alt={EXPERT_INFO.name} 
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
                />

                {/* Optional Badge */}
                 <div className="absolute -bottom-6 -left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                    <div className="bg-brand-accent text-brand-dark p-2 rounded-full">
                       <Star size={20} fill="currentColor" />
                    </div>
                    <div className="text-left">
                       <p className="text-xs text-white/80 uppercase tracking-wider">Referência em</p>
                       <p className="text-sm text-white font-serif font-bold">Naturalidade</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. QUEM SOU EU */}
      <Section id="sobre" className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-brand-accent/20 rounded-xl transform -rotate-2"></div>
            <img 
              src={ABOUT_IMAGE} 
              alt="Sobre a especialista" 
              className="relative rounded-xl shadow-xl w-full object-cover aspect-[3/4]"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
              Olá, muito prazer!
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Não sou apenas uma profissional que realiza procedimentos, sou apaixonada por elevar a autoestima das minhas pacientes através de uma estética responsável e humanizada.
              </p>
              <p>
                Meu objetivo não é transformar você em outra pessoa, mas sim refinar seus traços e devolver o viço que o tempo pode ter tirado, sempre prezando pela naturalidade.
              </p>
            </div>
            
            <ul className="space-y-3 pt-4">
              {[
                "Atendimento totalmente personalizado",
                "Foco em resultados naturais e elegantes",
                "Procedimentos com máxima segurança",
                "Acompanhamento próximo em todas as etapas"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-brand-primary font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS (Galeria) */}
      <Section id="resultados" bgColor="bg-brand-light">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark">
            Resultados Reais
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            Transformações que respeitam a anatomia e a individualidade de cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {RESULTS_GALLERY.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-square overflow-hidden rounded-lg cursor-zoom-in shadow-md hover:shadow-xl transition-all"
              onClick={() => openLightbox(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 bg-white/90 p-2 rounded-full text-brand-dark transition-opacity">
                    <ArrowRight size={20} />
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-stone-400 mt-6 uppercase tracking-wider">
          * Os resultados podem variar de pessoa para pessoa.
        </p>
      </Section>

      {/* 4. POR QUE CONFIAR */}
      <Section className="bg-brand-dark text-white">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-brand-accent">
          Por que confiar em mim?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              title: "Avaliação Honesta",
              desc: "Só indico o que você realmente precisa. Se um procedimento não for indicado, eu serei a primeira a dizer."
            },
            {
              icon: <HeartHandshake className="w-10 h-10" />,
              title: "Atendimento Humanizado",
              desc: "Você não é apenas um número. Aqui, ouço suas queixas e expectativas com atenção e carinho."
            },
            {
              icon: <Star className="w-10 h-10" />,
              title: "Excelência Técnica",
              desc: "Utilizo os melhores produtos do mercado e técnicas atualizadas para garantir sua segurança."
            },
            {
              icon: <MessageCircle className="w-10 h-10" />,
              title: "Suporte Completo",
              desc: "Meu cuidado com você não termina quando você sai do consultório. Acompanho todo o seu pós."
            },
            {
              icon: <MapPin className="w-10 h-10" />,
              title: "Localização Privilegiada",
              desc: "Consultório em Vila Velha - ES, preparado para te receber com conforto e privacidade."
            },
            {
              icon: <CheckCircle2 className="w-10 h-10" />,
              title: "Transparência",
              desc: "Explicação detalhada de todo o processo, riscos e cuidados. Nada de letras miúdas."
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-brand-primary/20 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-brand-primary/30 transition-colors">
              <div className="text-brand-accent mb-4">{card.icon}</div>
              <h3 className="font-serif text-xl mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <Section className="bg-brand-accent/10 border-y border-brand-accent/20">
        <div className="flex flex-col items-center text-center gap-6">
          <h3 className="font-serif text-2xl md:text-3xl text-brand-dark">
            Ainda com dúvida sobre qual o melhor procedimento?
          </h3>
          <p className="text-stone-600 max-w-lg">
            Não se preocupe em escolher agora. Na nossa conversa, vou analisar seu rosto e te guiar pelo melhor caminho.
          </p>
          <Button text="Falar com a Vitória no WhatsApp" variant="primary" />
        </div>
      </Section>

      {/* 6. COMO FUNCIONA */}
      <Section className="bg-white">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-brand-dark">
          Sua Primeira Consulta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-brand-light -z-10"></div>

          {[
            {
              step: "01",
              title: "Toque no Botão",
              desc: "Clique em qualquer botão desta página para abrir meu WhatsApp pessoal."
            },
            {
              step: "02",
              title: "Agendamento Fácil",
              desc: "Vamos encontrar o melhor horário na agenda para você vir ao consultório."
            },
            {
              step: "03",
              title: "Avaliação Gratuita",
              desc: "Presencialmente, faremos uma análise detalhada e montaremos seu plano de beleza."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-white p-4">
              <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mb-6 shadow-inner border-4 border-white ring-1 ring-brand-muted/20">
                <span className="font-serif text-4xl text-brand-accent font-bold">{item.step}</span>
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">{item.title}</h3>
              <p className="text-stone-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
            ✨ Totalmente gratuito e sem compromisso
          </span>
        </div>
      </Section>

      {/* 7. MAIS PROVAS (Bastidores) */}
      <Section bgColor="bg-stone-100">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-2xl md:text-4xl text-brand-dark">
            Bastidores & Autoridade
          </h2>
          <Instagram className="text-brand-dark opacity-50" />
        </div>
        
        {/* Horizontal Scroll Container for Mobile feel */}
        <div className="flex overflow-x-auto gap-4 pb-8 md:grid md:grid-cols-4 md:overflow-visible">
          {BACKSTAGE_GALLERY.map((img, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-64 md:w-auto rounded-xl overflow-hidden shadow-sm border border-white"
              onClick={() => openLightbox(img)}
            >
              <img 
                src={img} 
                alt="Bastidores" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <div className="bg-brand-dark text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Pronta para se sentir mais linda e confiante?
          </h2>
          <p className="text-brand-muted text-lg">
            A agenda costuma encher rápido. Garanta seu horário de avaliação ainda hoje.
          </p>
          <div className="flex justify-center">
            <Button 
              text="QUERO AGENDAR AGORA" 
              className="bg-brand-accent text-brand-dark hover:bg-white hover:text-brand-dark" 
            />
          </div>
        </div>
      </div>

      {/* 9. RODAPÉ */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 border-t border-stone-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-signature text-stone-200 mb-1">{EXPERT_INFO.name}</h3>
            <p className="text-sm uppercase tracking-widest">{EXPERT_INFO.role}</p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{EXPERT_INFO.location}</span>
            </div>
            <a 
              href={EXPERT_INFO.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-brand-accent transition-colors"
            >
              <Instagram size={16} />
              <span>@vitorialouren_</span>
            </a>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-stone-800 text-xs opacity-50">
          &copy; {new Date().getFullYear()} Vitória Lourenço. Todos os direitos reservados.
        </div>
      </footer>

      {/* Sticky Mobile CTA (Bottom Bar) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-stone-200 md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Button text="Agendar Grátis" subtext="" className="w-full" />
      </div>

      <Lightbox 
        isOpen={lightboxOpen} 
        src={currentImage} 
        onClose={() => setLightboxOpen(false)} 
      />
    </div>
  );
};

export default App;