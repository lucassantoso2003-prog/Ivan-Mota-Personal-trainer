import React from 'react';
import { MapPin, Instagram, Dumbbell, Star, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, IMAGES, DIFFERENTIALS, STEPS } from './constants';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { Gallery } from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text overflow-x-hidden selection:bg-brand-accent selection:text-black">
      
      {/* 1. HERO SECTION - REDESIGNED */}
      <section className="relative h-screen flex items-end md:items-center justify-center overflow-hidden">
        {/* Background Image with Enhanced Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent z-10" />
          <img 
            src={IMAGES.hero} 
            alt="Ivan Mota Personal Trainer" 
            className="w-full h-full object-cover object-top md:object-center transform scale-105"
          />
        </div>

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 pb-12 md:pb-0">
          <div className="w-full md:w-2/3 lg:w-1/2 space-y-6 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_#fbbf24]"></span>
              <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase">Consultoria Premium</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
              Construa um<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-600 text-glow">Corpo Forte</span><br/>
              e Definido
            </h1>

            <div className="h-1 w-24 bg-brand-accent rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-md">
              Eu sou <strong>Ivan Mota</strong>. +500 vidas transformadas em Alagoinhas com treino sério e sem atalhos.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button 
                text="Agendar Primeira Consulta" 
                subtext="Gratuito • Sem compromisso"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU (AUTHORITY) - REFINED */}
      <Section className="bg-brand-card border-t border-brand-accent/10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative group">
             {/* Gold frame effect */}
             <div className="absolute -inset-1 bg-gradient-to-tr from-brand-accent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></div>
             <img 
              src={IMAGES.about} 
              alt="Ivan Mota" 
              className="relative w-full rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide italic mb-2">
                Ivan Mota
              </h2>
              <p className="text-brand-accent font-bold tracking-widest text-sm uppercase">Personal Trainer em Alagoinhas BA</p>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-brand-accent/30 pl-6">
              Minha abordagem não é sobre te vender um sonho impossível. É sobre <span className="text-white font-semibold">fisiologia aplicada</span> e <span className="text-white font-semibold">estratégia</span>. Eu tiro você da estagnação e coloco no caminho da performance estética e saúde real.
            </p>

            <div className="space-y-4">
              {[
                "Metodologia validada com +500 alunos",
                "Foco total em Hipertrofia e Definição",
                "Acompanhamento próximo e real"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-brand-accent/30 transition-colors">
                  <div className="bg-brand-accent/10 p-2 rounded-full">
                    <Check className="w-4 h-4 text-brand-accent" />
                  </div>
                  <span className="font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS (GALLERY) */}
      <Section className="bg-brand-dark">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <div className="inline-flex items-center gap-2 text-brand-accent justify-center">
            <Dumbbell className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-widest">Antes e Depois</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic">
            Resultados <span className="text-brand-accent">Reais</span>
          </h2>
          <p className="text-brand-muted max-w-lg mx-auto">
            Contra fatos não há argumentos. Veja o que acontece quando você segue o plano.
          </p>
        </div>
        
        <Gallery />
        
        <div className="mt-16 text-center">
          <Button 
            text="Quero um resultado igual" 
            variant="outline"
            className="md:inline-flex w-full md:w-auto hover:scale-105 transition-transform"
          />
        </div>
      </Section>

      {/* 4. POR QUE CONFIAR (CARDS) */}
      <Section className="bg-[#0a0a0a] relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>
        
        <h2 className="text-2xl md:text-3xl font-black uppercase text-center mb-16 relative z-10">
          Diferenciais do <span className="text-brand-accent border-b-2 border-brand-accent">Time Ivan Mota</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {DIFFERENTIALS.map((card, idx) => (
            <div key={idx} className="bg-white/5 p-8 rounded-none border-l-2 border-brand-accent hover:bg-white/10 transition-all duration-300 group">
              <card.icon className="w-10 h-10 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 text-white uppercase italic">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <div className="py-20 px-4 bg-brand-accent text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">
            Pare de perder tempo na academia
          </h2>
          <p className="text-lg font-medium opacity-80 max-w-xl mx-auto">
            Treinar fofo não traz resultado. Eu tenho o mapa para o corpo que você deseja. Vamos conversar?
          </p>
          <div className="pt-4">
             <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-4 px-12 rounded-full font-black bg-black text-brand-accent hover:bg-zinc-900 transition-all shadow-2xl hover:scale-105 text-lg uppercase tracking-wider gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Quero marcar minha consulta
            </a>
          </div>
        </div>
      </div>

      {/* 6. COMO FUNCIONA (STEPS) */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase mb-4">
            Comece em 3 Passos
          </h2>
          <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative p-8 border border-white/10 bg-brand-card hover:border-brand-accent transition-colors duration-300 group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-dark p-2 border border-brand-accent/20 rounded-full group-hover:border-brand-accent transition-colors">
                <span className="flex items-center justify-center w-10 h-10 bg-brand-accent text-black font-black rounded-full text-lg">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-center mt-6 mb-3 uppercase text-white">{step.title}</h3>
              <p className="text-gray-400 text-center text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. REMOVED BASTIDORES SECTION */}

      {/* 8. CTA FINAL */}
      <Section className="text-center pb-24">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl p-8 md:p-16 relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-accent/10 transition-colors duration-700"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-none">
              Decida mudar <br/> <span className="text-brand-accent">agora mesmo</span>
            </h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto text-lg">
              A única coisa que separa você do corpo que você quer é o primeiro passo. Agende sua consultoria gratuita.
            </p>
            <div className="pt-4">
              <a 
                href={CONTACT_INFO.whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-5 px-10 rounded-lg font-black text-black bg-brand-accent hover:bg-brand-accentHover transition-all shadow-[0_0_30px_rgba(251,191,36,0.2)] hover:shadow-[0_0_50px_rgba(251,191,36,0.4)] hover:-translate-y-1 text-xl uppercase tracking-widest gap-3"
              >
                <MessageCircle className="w-6 h-6 fill-black" />
                Agendar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-black text-center">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="space-y-1">
            <h3 className="font-black text-2xl uppercase tracking-widest text-white italic">Ivan Mota</h3>
            <p className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase">Personal Trainer</p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4 text-brand-accent" />
            <span>Alagoinhas, Bahia</span>
          </div>

          <div className="flex gap-6 mt-4">
            <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-brand-accent hover:bg-white/10 transition-all">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <p className="text-xs text-zinc-800 mt-8 font-medium">
            &copy; {new Date().getFullYear()} Ivan Mota Team. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating Sticky CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden animate-bounce-slow">
        <a 
          href={CONTACT_INFO.whatsappLink}
          className="flex items-center justify-center w-14 h-14 bg-brand-accent rounded-full text-black shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>
    </div>
  );
}