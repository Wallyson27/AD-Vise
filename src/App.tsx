import React from 'react';
import { Target, Zap, BarChart2 } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-cyber-black/80 backdrop-blur-md border-b border-cyber-yellow/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cyber-yellow flex items-center justify-center font-bold text-black text-xl">C</div>
          <span className="font-bold tracking-tighter text-xl">CORP<span className="text-cyber-yellow">STRAT</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
          <a className="hover:text-cyber-yellow transition" href="#expert">O Especialista</a>
          <a className="hover:text-cyber-yellow transition" href="#modules">Módulos</a>
          <a className="hover:text-cyber-yellow transition" href="#proof">Logs de Sucesso</a>
        </div>
        <a className="cyber-button px-6 py-2 text-sm" href="#cta">Acessar Rede</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Cyberpunk Cityscape" 
          className="w-full h-full object-cover opacity-40" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwOfaSHfa-MX-Ew-lwSUOrL_nz7uCAb-zyczxXPep8PsTkElwRqVQESOQLPlEk631GaPezLzy15RLcZ_4ID4-pugHGaVum1sWlOvWdXFmSOUwzZEftWsa3F6yRscQE_93TqKie3KfnUPapfrL5rC4sgRKNGiINYWnPWnZDV7v2M1yYbSDCZvWFy7MPC6xNZycD1UEnoBnvJKm3Y7mPeZeJWmwUzWpHKElFD6rM-ItwhH4grkpm440Achn-3T3n7zD9cAIUplv9ZrIJ"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-black via-cyber-black/80 to-transparent"></div>
        <div className="grid-bg absolute inset-0"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 border border-cyber-blue text-cyber-blue text-xs font-bold tracking-[0.2em] uppercase">
            /// ESTADO DA CONEXÃO: ESTÁVEL
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase glitch-text">
            Domine os <span className="text-cyber-yellow">Algoritmos</span> da Rede
          </h1>
          <p className="text-xl text-gray-300 max-w-lg leading-relaxed border-l-4 border-cyber-yellow pl-6">
            Torne-se um Estrategista CORP no tráfego pago. Hackeie o ROI, otimize o cyber-funil e escale seus resultados para o nível Elite de Night City.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a className="cyber-button px-10 py-5 text-lg flex items-center justify-center" href="#cta">
              DOWNLOAD DATA: INSCREVA-SE AGORA
            </a>
            <button className="border border-white/20 hover:border-cyber-yellow px-10 py-5 text-lg font-bold uppercase transition flex items-center justify-center">
              Ver Trailer da Missão
            </button>
          </div>
          <div className="flex items-center space-x-6 pt-4 opacity-60">
            <img alt="Google Ads" className="h-6 grayscale hover:grayscale-0 transition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe2YiQlbxb7UtJC9zP4OmcLfyDRxl7oEUGzoUE4loM7uC7svdQI7P3T2coTTvBtyTax-URjMfmN0EUxBqTPxuj87hn4Ix13rFbrtYD0If4Vu6mfkvpzeXtHOne2Ld4QwCKYrCa4VTozcrqP6UGcLgbcSfBXvo5HWbl30cZJmStE7BDhF4-ivA0QUn8xQsbtfdraH5REUc0-C4Fm23iJlRGS7ozl8kHMhu_4HA5w9JsKRLwAIoD9kNj2ftCsBo4b_BpIjKU8Kj75xz-" referrerPolicy="no-referrer" />
            <img alt="Meta" className="h-6 grayscale hover:grayscale-0 transition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzSj9tf__RFNnk4r3-bwc-SiB5yNwP2mNdk3eZ9iiyUOD1w06FGzdiLdbHSD0MK0i3uLhYrJ0gv8SQDZF1pCW-4roPx41x5RxcV4wxLNhgRJedhcSsW5r9NUjY_A6Eer0Arn0HRUSmzVJ-UJSXY83Uc2h8Bgnt6KMKxwzVBsvlz9RuEZEWawo6N1PODk_ZAFRbIYgtqRHmhcfqpRBy0o0-OPay4noUtrxZp_jY1tdWQJl-_3zYNBK1bfLf21cCLi5XyFJCbvnsw-qV" referrerPolicy="no-referrer" />
            <img alt="LinkedIn" className="h-6 grayscale hover:grayscale-0 transition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzTLvGlYKBS3DUoy7MmSgG3Xi2lxj2snCrhSHIH_VLFxhKxef-xyyVHkKWtFv-yXEVqTx0WQ0eYrQ56yXZZiajzk6-I95v9L503HXPp3yg0SPELvNZXwLc7cBJpjut_gN-09l72InduAhcAI-xOu1J3SNYAQrDpFjWXywCQiLSx-3cimpAf5CYJ1B0J9i12DRxL5gLTEaQK15n8NQ3nC2IhbtUa72Ct7V_swhyU_1FlNmC3c40rYzOJtiKfsCQlC6C_l9WTSWs5PeZ" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="scanline"></div>
          <div className="relative p-4 border border-cyber-yellow/20">
            <img alt="Corp Executive" className="relative z-10 filter grayscale contrast-125 brightness-75 hover:grayscale-0 transition duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi0zx4ebG02djenrGFBcFalqgMmXMTItz626oSpU0z0bYvrb8QzzcWfqxt-0BW9ykJt6MNDlTjSzEewbBROYK20enZsrj_yf4CF3Kmgxg2ga-CAhr3R3_i-fp8OF2spb2AoTgyA2xNYee9xBGlETZdAlHmkSYVFfYs6F1j3inQ6Mde_1nHyyuDnt3-PHuNGwi2Mh7QsOhIUTIPNtwM9985I7nTajEXA3U0ILZgHddfyFPb4soLo6BtTCqrsB3vtHu18AaMcHImMoL6" referrerPolicy="no-referrer" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyber-blue"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-cyber-blue"></div>
            <div className="absolute top-1/2 -right-12 transform -rotate-90 text-[10px] tracking-[0.5em] text-cyber-yellow font-bold uppercase">
              SISTEMA DE IDENTIFICAÇÃO BIOMÉTRICA: ATIVO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expert() {
  return (
    <section className="py-24 bg-cyber-dark border-y border-cyber-yellow/10" id="expert">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-cyber-yellow/20 blur-3xl group-hover:bg-cyber-yellow/30 transition"></div>
            <img alt="The Expert" className="relative z-10 border-2 border-cyber-yellow rounded-sm grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCBPrTF6CCvJK0T1xhUfsBxxT1JJDEC6x3s3d2mALg329XW2uLoJcrQythdR8EgCbJBjK87vIeBhT8LqWrBvwyzKHKri5PP9_W530kfNp-W8S2M8h7SQB_xhnONLhSnHgZaWXVrN1pMSdyVREHnzmLdMNu0wc4fqo2Aqf4V6cHA2MAVllr_yn7IP-3JNgbqq8_Vdc0rGU3AriqA-3sRFZucBAecwn2Vpmnt95qZU4a8AOQVCE_z3k_Ws6uzXijJgAD_OaiaB6VRbTH" referrerPolicy="no-referrer" />
            <div className="absolute bottom-4 left-4 z-20 bg-cyber-yellow text-black px-4 py-2 font-black uppercase text-sm">
              STATUS: OVERCLOCK NO MERCADO
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-cyber-yellow text-sm font-bold tracking-[0.3em] uppercase">/// O ARQUITETO DA REDE</h2>
            <h3 className="text-4xl font-bold uppercase">De Analista de Dados a <span className="text-cyber-blue">Corp Executivo</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Eu não apenas opero ferramentas. Eu hackeio a psicologia do consumo digital. Após gerenciar mais de 50 milhões em budget para megacorporações, decidi abrir o código-fonte da minha estratégia.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/50 p-4 border-l-2 border-cyber-blue">
                <div className="text-2xl font-bold text-cyber-blue">R$ 50M+</div>
                <div className="text-xs uppercase text-gray-500">Capital Gerenciado</div>
              </div>
              <div className="bg-black/50 p-4 border-l-2 border-cyber-yellow">
                <div className="text-2xl font-bold text-cyber-yellow">1.2k+</div>
                <div className="text-xs uppercase text-gray-500">Células Escaladas</div>
              </div>
            </div>
            <p className="italic text-cyber-yellow/80 text-sm">
              "No mercado de tráfego, ou você é o programador ou é apenas um bit processado pelo sistema."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="py-24 relative overflow-hidden" id="modules">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase mb-4">Arquivos da Missão</h2>
          <p className="text-cyber-blue tracking-widest uppercase text-sm font-bold">Injeção de Conhecimento Neural Nível 5</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative bg-cyber-dark/50 p-8 border border-white/10 hover:border-cyber-yellow transition-all duration-500">
            <div className="text-cyber-yellow mb-6">
              <Target className="w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-4 uppercase">01. Google Ads Matrix</h4>
            <p className="text-gray-500 text-sm mb-6">Domine a rede de pesquisa. Aprenda a posicionar seus anúncios onde o desejo encontra a necessidade instantânea.</p>
            <ul className="space-y-2 text-xs font-mono text-cyber-blue">
              <li>&gt; Decodificando Palavras-Chave</li>
              <li>&gt; Scripts de Automação Corp</li>
              <li>&gt; YouTube Stream High-Jack</li>
            </ul>
          </div>
          <div className="group relative bg-cyber-dark/50 p-8 border border-white/10 hover:border-cyber-blue transition-all duration-500">
            <div className="text-cyber-blue mb-6">
              <Zap className="w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-4 uppercase">02. Facebook Meta-Interface</h4>
            <p className="text-gray-500 text-sm mb-6">Infiltre-se no feed. Estratégias de interrupção padrão e segmentação psicográfica avançada.</p>
            <ul className="space-y-2 text-xs font-mono text-cyber-yellow">
              <li>&gt; Pixel Deep-Trace</li>
              <li>&gt; Escala de Lookalike Nível 10</li>
              <li>&gt; Creative Overload Strategy</li>
            </ul>
          </div>
          <div className="group relative bg-cyber-dark/50 p-8 border border-white/10 hover:border-cyber-yellow transition-all duration-500">
            <div className="text-cyber-yellow mb-6">
              <BarChart2 className="w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-4 uppercase">03. Data Analytics Overclock</h4>
            <p className="text-gray-500 text-sm mb-6">Transforme números frios em lucro bruto. O dashboard que separa os amadores dos estrategistas de elite.</p>
            <ul className="space-y-2 text-xs font-mono text-cyber-blue">
              <li>&gt; Modelagem de Atribuição</li>
              <li>&gt; LTV Forecasting</li>
              <li>&gt; Dashboards de Combate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-black grid-bg" id="proof">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-black uppercase mb-12 italic tracking-tighter text-cyber-yellow">/// TRANSMISSÕES DE SUCESSO INTERCEPTADAS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-cyber-dark p-6 border-t-2 border-cyber-blue relative">
            <div className="absolute -top-3 right-4 bg-cyber-blue text-black text-[10px] px-2 font-bold uppercase">CRYPT-VERIFIED</div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full border border-cyber-blue"></div>
              <div>
                <div className="text-sm font-bold">User_772</div>
                <div className="text-[10px] text-gray-500">Agência X-Net</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-mono">"O módulo de escala lateral mudou meu jogo. Saímos de um ROAS 2.5 para 6.8 em 30 dias de implementação."</p>
          </div>
          <div className="bg-cyber-dark p-6 border-t-2 border-cyber-yellow relative">
            <div className="absolute -top-3 right-4 bg-cyber-yellow text-black text-[10px] px-2 font-bold uppercase">LOG_REC_092</div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full border border-cyber-yellow"></div>
              <div>
                <div className="text-sm font-bold">V_Stategist</div>
                <div className="text-[10px] text-gray-500">Ecommerce Alpha</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-mono">"Finalmente entendi como o algoritmo do Meta pensa. Não é sorte, é engenharia reversa."</p>
          </div>
          <div className="bg-cyber-dark p-6 border-t-2 border-cyber-blue relative">
            <div className="absolute -top-3 right-4 bg-cyber-blue text-black text-[10px] px-2 font-bold uppercase">CRYPT-VERIFIED</div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full border border-cyber-blue"></div>
              <div>
                <div className="text-sm font-bold">Net_Runner_Sales</div>
                <div className="text-[10px] text-gray-500">Freelancer</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-mono">"O suporte é direto ao ponto, sem enrolação corporativa. É tática pura aplicada no campo de batalha."</p>
          </div>
          <div className="bg-cyber-dark p-6 border-t-2 border-cyber-yellow relative">
            <div className="absolute -top-3 right-4 bg-cyber-yellow text-black text-[10px] px-2 font-bold uppercase">LOG_REC_011</div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full border border-cyber-yellow"></div>
              <div>
                <div className="text-sm font-bold">S. Arasaka</div>
                <div className="text-[10px] text-gray-500">Consultoria Beta</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-mono">"Os dashboards de combate valem o investimento sozinhos. Clareza total sobre para onde cada centavo está indo."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="py-16 bg-cyber-yellow text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 border-4 border-black flex items-center justify-center font-black text-4xl transform -rotate-12">7D</div>
            <div>
              <h3 className="text-2xl font-black uppercase leading-tight">Satisfação Criptografada</h3>
              <p className="font-bold uppercase text-sm">7 dias de acesso ao Core ou seu dinheiro de volta</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="border border-black p-3 text-[10px] font-bold uppercase tracking-widest">Acesso Vitalício</div>
            <div className="border border-black p-3 text-[10px] font-bold uppercase tracking-widest">Update 2.0 Free</div>
            <div className="border border-black p-3 text-[10px] font-bold uppercase tracking-widest">Certificado Corp</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="cta">
      <div className="absolute inset-0 opacity-10">
        <img alt="Tech Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI5TV6v4aH_1YfLA-XpAVPgea-xUgnhTzWPjq8_tcOcgJOucM-Q_5BHxXo0f7YitWttI7pT89EtD6gLDZqnrQKxwj1t9X2oC_1i-iOydGNJRTCD1zPKeMec9y_N3T8JHIXiKp3OGYI1T_TNJaxY5g88qJkaOaN_tqg3R58ejl5Ho2SrvgJhK1GHSBDkvQ23Cep2Yk4YnqVwVOqVJNAvGIRQeVtdN0bgzokRA6uzTLgDUFdeP1OnY6cKsP2ycRrguTBK8JuTsmcHr3j" referrerPolicy="no-referrer" />
      </div>
      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 glitch-text">Pronto para o <span className="text-cyber-blue">Upload?</span></h2>
        <p className="text-xl text-gray-400 mb-12">A rede está aberta por tempo limitado. Garanta sua vaga no squad de elite e comece a escalar hoje mesmo.</p>
        <div className="bg-cyber-dark p-8 border-2 border-cyber-yellow relative group">
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-cyber-yellow"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyber-yellow"></div>
          <div className="text-4xl font-black text-cyber-yellow mb-2">12x R$ 97,00</div>
          <div className="text-sm text-gray-500 line-through mb-6">De R$ 1.997,00 por apenas:</div>
          <a className="cyber-button w-full block py-6 text-2xl" href="#">
            INICIAR DOWNLOAD DO PROTOCOLO
          </a>
          <p className="mt-6 text-[10px] text-gray-600 uppercase tracking-widest">Ambiente de pagamento 100% seguro via Protocolo SSL-Matrix</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-cyber-black pt-20 pb-10 border-t border-white/5 font-mono text-[10px] text-gray-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 text-white mb-6">
              <div className="w-6 h-6 bg-cyber-yellow flex items-center justify-center font-bold text-black text-xs">C</div>
              <span className="font-bold tracking-tighter text-sm uppercase">CORPSTRAT SYSTEMS</span>
            </div>
            <p className="leading-relaxed">SISTEMA OPERACIONAL V3.4.1<br/>LOCALIZAÇÃO: NIGHT CITY / SECTOR 7<br/>ALL RIGHTS RESERVED TO THE CORP.</p>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase mb-4 text-xs">Protocolos</h5>
            <ul className="space-y-2 uppercase">
              <li><a className="hover:text-cyber-yellow" href="#">Termos de Uso</a></li>
              <li><a className="hover:text-cyber-yellow" href="#">Privacidade de Dados</a></li>
              <li><a className="hover:text-cyber-yellow" href="#">Cookies de Rastreio</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase mb-4 text-xs">Suporte Técnico</h5>
            <ul className="space-y-2 uppercase">
              <li><a className="hover:text-cyber-blue" href="#">Abrir Chamado</a></li>
              <li><a className="hover:text-cyber-blue" href="#">FAQ do Sistema</a></li>
              <li><a className="hover:text-cyber-blue" href="#">Comunidade Discord</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase mb-4 text-xs">Status da Rede</h5>
            <div className="flex items-center space-x-2 text-green-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>SERVIDORES ONLINE</span>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/5 opacity-50">
          © 2024 CORPSTRAT - DESENVOLVIDO PARA ESTRATEGISTAS DE ALTO IMPACTO. NO SPAM. NO MERCY.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans antialiased text-white bg-cyber-black selection:bg-cyber-yellow selection:text-black">
      <Navbar />
      <Hero />
      <Expert />
      <Modules />
      <Testimonials />
      <Guarantee />
      <CTA />
      <Footer />
    </div>
  );
}
