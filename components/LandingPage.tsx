import React from 'react';
import { 
  ArrowRight, 
  Dna, 
  Activity, 
  Database, 
  Layers, 
  Check,
  Target,
  Users,
  Globe,
  TrendingUp,
  MapPin,
  Zap,
  Leaf,
  Stethoscope,
  Utensils,
  Pill,
  Star,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const LandingPage: React.FC<{ onLaunchDemo: () => void }> = ({ onLaunchDemo }) => {
  const pocData = [
    { name: 'Bajo Peso', val: 35, color: '#f59e0b' },
    { name: 'Peso Saludable', val: 78, color: '#10b981' },
    { name: 'Sobrepeso', val: 42, color: '#ef4444' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-emerald-100">
      
      {/* Header / Nav */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Dna className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">MicroNutriBiome</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-emerald-600 transition">El Desafío Clínico</a>
            <a href="#solution" className="hover:text-emerald-600 transition">Intervención</a>
            <a href="#market" className="hover:text-emerald-600 transition">Impacto</a>
          </nav>
          <button 
            onClick={onLaunchDemo}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold transition shadow-md hover:shadow-lg flex items-center gap-2"
          >
            Ver Plataforma <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Slide 1: Hero - Focus on Health & Monitoring */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Medicina de Precisión &bull; Nutrición &bull; Metabolismo</span>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
            Decodificando la <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Salud Invisible.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Transformamos la "caja negra" del microbioma en un sistema de navegación clínica. Deje de adivinar con dietas genéricas y empiece a monitorear la respuesta biológica real de sus pacientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onLaunchDemo} className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition flex items-center justify-center gap-2">
              Ver Panel de Monitoreo
            </button>
            <div className="flex items-center gap-3 px-6 py-4 border border-slate-200 rounded-xl bg-slate-50/50">
              <div className="flex -space-x-2 overflow-hidden">
                 <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">MD</div>
                 <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-700">ND</div>
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">Diseñado para Clínicos</p>
                <p className="text-slate-500 text-xs">Resultados accionables, no solo datos.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000" 
            alt="Microbioma y Bacterias" 
            className="relative rounded-2xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition duration-700 object-cover h-[500px] w-full"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
                <Activity className="text-emerald-500 w-5 h-5" />
                <span className="font-bold text-slate-900">Monitoreo Continuo</span>
            </div>
            <p className="text-sm text-slate-600 leading-snug">"Lo que no se mide, no se puede mejorar. El microbioma es el sensor metabólico más sensible del cuerpo."</p>
          </div>
        </div>
      </section>

      {/* Slide 2: The Problem - Trial and Error vs Precision */}
      <section id="problem" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">El Problema: Nutrición a Ciegas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Prescribimos dietas y tratamientos asumiendo que todos los organismos responden igual. La realidad clínica demuestra lo contrario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900">Ensayo y Error</h4>
                        <p className="text-slate-600">"Prueba esta dieta, si no funciona en 3 meses, probamos otra". Perdemos tiempo valioso mientras la inflamación avanza.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Layers className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900">Intervenciones Genéricas</h4>
                        <p className="text-slate-600">Probióticos estándar que no colonizan, o fibras que causan distensión porque faltan los degradadores específicos.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900">Biomarcadores Tardíos</h4>
                        <p className="text-slate-600">La glucosa y el colesterol suben cuando el daño ya está hecho. El microbioma alerta años antes.</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">La Solución: ISEM como Brújula</h3>
                <p className="mb-8 text-slate-600">
                    No es solo un test de laboratorio. Es una plataforma de inteligencia biológica que conecta los puntos entre el estilo de vida y la respuesta celular.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <span className="text-3xl font-bold text-emerald-600 block mb-1">30%</span>
                        <span className="text-xs font-bold text-emerald-800 uppercase">Mejor Adherencia</span>
                        <p className="text-xs text-slate-500 mt-1">Cuando el paciente ve sus datos.</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <span className="text-3xl font-bold text-blue-600 block mb-1">Pre-</span>
                        <span className="text-xs font-bold text-blue-800 uppercase">Diagnóstico</span>
                        <p className="text-xs text-slate-500 mt-1">Detección temprana de disbiosis.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Solution - Broad Intervention Possibilities */}
      <section id="solution" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-emerald-400">Más allá del Diagnóstico: Intervención</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Nuestro sistema habilita tres ejes de acción clínica inmediata basados en la ecología del paciente.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Eje 1 */}
                <div className="bg-white/10 backdrop-blur-sm border border-emerald-500/30 p-8 rounded-2xl hover:bg-white/15 transition duration-300">
                    <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/50">
                        <Utensils className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Nutrición Moduladora</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        Diseño de dietas ricas en MACs (Carbohidratos Accesibles a la Microbiota) específicos para alimentar a las especies beneficiosas que le faltan al paciente.
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-emerald-200">
                        <li className="flex gap-2"><Check className="w-4 h-4" /> Alimentos fermentados dirigidos</li>
                        <li className="flex gap-2"><Check className="w-4 h-4" /> Fibras prebióticas específicas</li>
                    </ul>
                </div>

                {/* Eje 2 */}
                <div className="bg-white/10 backdrop-blur-sm border border-emerald-500/30 p-8 rounded-2xl hover:bg-white/15 transition duration-300">
                    <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                        <Pill className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Suplementación Precisa</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        Fin a los probióticos genéricos. Recomendamos cepas específicas y dosis de micronutrientes (Zinc, Vitamina D) basados en la capacidad absortiva del intestino.
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-blue-200">
                        <li className="flex gap-2"><Check className="w-4 h-4" /> Cepas probióticas compatibles</li>
                        <li className="flex gap-2"><Check className="w-4 h-4" /> Reparación de barrera intestinal</li>
                    </ul>
                </div>

                {/* Eje 3 */}
                <div className="bg-white/10 backdrop-blur-sm border border-emerald-500/30 p-8 rounded-2xl hover:bg-white/15 transition duration-300">
                    <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-900/50">
                        <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Estilo de Vida & Entorno</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        Correlacionamos estrés, sueño y ejercicio con la diversidad microbiana para prescribir cambios de hábitos que realmente impacten la inflamación sistémica.
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-amber-200">
                        <li className="flex gap-2"><Check className="w-4 h-4" /> Higiene del sueño circadiana</li>
                        <li className="flex gap-2"><Check className="w-4 h-4" /> Exposición ambiental controlada</li>
                    </ul>
                </div>
            </div>
         </div>
      </section>

      {/* Slide 4: How it works (The System) - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Un Ciclo de Mejora Continua</h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        La salud no es una foto estática, es una película. Nuestro modelo se basa en el seguimiento longitudinal para validar qué intervenciones funcionan para CADA paciente.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 shrink-0">1</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Perfilamiento Inicial (T1)</h4>
                                <p className="text-sm text-slate-600">Línea base de diversidad y funciones metabólicas.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 shrink-0">2</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Intervención Personalizada</h4>
                                <p className="text-sm text-slate-600">Aplicación del Plan de Acción (Dieta, Suplementos).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 shrink-0">3</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Re-evaluación (T2)</h4>
                                <p className="text-sm text-slate-600">Medimos el impacto real. Ajustamos la dosis o la dieta. Optimizamos.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg">
                    <h3 className="font-bold text-slate-700 mb-6 text-center">Score ISEM: Tu Semáforo Clínico</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 text-right font-bold text-emerald-600">30%</div>
                            <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-[30%]"></div>
                            </div>
                            <div className="text-sm text-slate-700 w-40 font-medium">Resiliencia Ecológica</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 text-right font-bold text-blue-600">25%</div>
                            <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[25%]"></div>
                            </div>
                            <div className="text-sm text-slate-700 w-40 font-medium">Capacidad Anti-inflamatoria</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 text-right font-bold text-violet-600">25%</div>
                            <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-violet-500 w-[25%]"></div>
                            </div>
                            <div className="text-sm text-slate-700 w-40 font-medium">Metabolismo de Carbohidratos</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 text-right font-bold text-amber-500">20%</div>
                            <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-500 w-[20%]"></div>
                            </div>
                            <div className="text-sm text-slate-700 w-40 font-medium">Protección de Barrera</div>
                        </div>
                    </div>
                    <p className="text-xs text-center text-slate-400 mt-6 italic">
                        Una métrica compuesta diseñada para facilitar la comunicación médico-paciente.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Slide 7: POC - Validation */}
      <section id="validation" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
                <div>
                     <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-2">VALIDACIÓN CLÍNICA</div>
                    <h2 className="text-3xl font-bold text-slate-900">Probado en Pacientes Reales</h2>
                </div>
                <div className="hidden md:block">
                     <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center font-bold text-slate-500">60+</div>
                        <div className="w-12 h-12 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-white font-bold text-xs p-1 text-center">HUN</div>
                     </div>
                </div>
            </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 mb-6 text-lg">
                En colaboración con el Hospital Universidad del Norte, hemos diseñado un protocolo para diferenciar estados de salud con mayor precisión que los marcadores tradicionales.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-full"><Check className="w-3 h-3 text-emerald-600" /></div>
                    <span><strong>Hipótesis:</strong> Distinción clara entre Disbiosis Severa vs. Sobrepeso Metabólico.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-full"><Check className="w-3 h-3 text-emerald-600" /></div>
                    <span><strong>Objetivo:</strong> Correlacionar datos 16S con historias clínicas (Meta &gt;90%).</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-full"><Check className="w-3 h-3 text-emerald-600" /></div>
                    <span><strong>Capacidad Local:</strong> Todo el proceso (wet-lab & dry-lab) realizado en Barranquilla.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 h-80">
              <h3 className="text-sm font-bold text-slate-500 mb-4 text-center">Indice de Diversidad Ecológica (Proyección)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pocData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="val" radius={[8, 8, 0, 0]}>
                    {pocData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: MARKET OPPORTUNITY */}
      <section id="market" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">El Mercado de la Longevidad</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              La medicina se está moviendo de lo "Curativo" a lo "Preventivo y Personalizado". Estamos en la cresta de esa ola.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Global */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 text-blue-400">
                 <Globe className="w-6 h-6" />
                 <span className="font-bold text-sm uppercase tracking-wide">Panorama Global</span>
              </div>
              <div className="text-5xl font-bold text-white mb-2">$18B</div>
              <p className="text-slate-400 text-sm mb-4">Mercado de Nutrición Personalizada.</p>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <TrendingUp className="w-4 h-4" /> &gt;15% CAGR
              </div>
            </div>

            {/* Regional */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
               <div className="flex items-center gap-3 mb-4 text-emerald-400">
                 <MapPin className="w-6 h-6" />
                 <span className="font-bold text-sm uppercase tracking-wide">Latinoamérica</span>
              </div>
              <div className="text-5xl font-bold text-white mb-2">$1B</div>
              <p className="text-slate-400 text-sm mb-4">Región de crecimiento más rápido.</p>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <TrendingUp className="w-4 h-4" /> &gt;5% anual
              </div>
            </div>

            {/* Niche */}
            <div className="bg-gradient-to-br from-emerald-900/50 to-blue-900/50 border border-emerald-500/30 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500 blur-2xl opacity-20"></div>
               <div className="flex items-center gap-3 mb-4 text-white">
                 <Target className="w-6 h-6" />
                 <span className="font-bold text-sm uppercase tracking-wide">Mercado Objetivo</span>
              </div>
              <div className="text-5xl font-bold text-white mb-2">1M+</div>
              <p className="text-slate-300 text-sm mb-4">Pacientes con riesgo metabólico en Colombia.</p>
              <div className="border-t border-white/10 pt-4 mt-4">
                 <p className="text-xs font-bold text-emerald-400 mb-1">SEGMENTO INICIAL (0.5% - 1%)</p>
                 <p className="text-xs text-slate-300 mb-3">
                    High-Income, Early Adopters & "Biohackers".
                 </p>
                 <p className="text-[10px] text-emerald-500/80 font-mono border border-emerald-500/20 rounded px-2 py-1 inline-block">
                    VALIDACIÓN: HUN (FASE 1)
                 </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
                <Stethoscope className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Necesidad Clínica</h4>
                <p className="text-sm text-slate-400">Médicos funcionales y nutricionistas necesitan datos objetivos, no suposiciones.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Costo-Eficiencia</h4>
                <p className="text-sm text-slate-400">Procesamiento local reduce tiempos de semanas a días y costos en un 40%.</p>
              </div>
            </div>
             <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Food as Medicine</h4>
                <p className="text-sm text-slate-400">El consumidor busca prevenir enfermedades a través de la alimentación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: Business Model */}
      <section id="business" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Planes de Suscripción & Monitoreo</h2>
            <p className="text-slate-500">Modelo continuo. Porque una sola foto no cuenta la historia completa de su salud.</p>
          </div>
          
          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* PLAN BASICO */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition relative flex flex-col">
              <div className="mb-6">
                <div className="text-emerald-600 font-bold mb-2 uppercase tracking-wide text-xs bg-emerald-50 inline-block px-2 py-1 rounded">Mantenimiento</div>
                <h3 className="text-2xl font-bold text-slate-900">Plan Esencial</h3>
                <p className="text-slate-500 text-sm mt-2">Para prevención y chequeo de rutina.</p>
              </div>
              
              <div className="text-4xl font-bold text-slate-900 mb-6">
                2 <span className="text-lg font-normal text-slate-500">Kits / Año</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-slate-600 flex-1">
                <li className="flex gap-3">
                  <div className="bg-slate-100 p-1 rounded-full h-fit"><Check className="w-4 h-4 text-slate-600" /></div>
                  <span className="text-sm"><strong>Secuenciación Semestral</strong> (16S rRNA)</span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-slate-100 p-1 rounded-full h-fit"><Check className="w-4 h-4 text-slate-600" /></div>
                  <span className="text-sm">Informe de composición básico</span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-slate-100 p-1 rounded-full h-fit"><Check className="w-4 h-4 text-slate-600" /></div>
                  <span className="text-sm">Recomendaciones dietarias por IA</span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-slate-100 p-1 rounded-full h-fit"><Check className="w-4 h-4 text-slate-600" /></div>
                  <span className="text-sm">Historial en App</span>
                </li>
              </ul>
              
              <button onClick={onLaunchDemo} className="w-full py-3 rounded-lg border-2 border-slate-200 text-slate-600 font-bold hover:border-slate-900 hover:text-slate-900 transition">
                Seleccionar Básico
              </button>
            </div>

            {/* PLAN PREMIUM */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative flex flex-col border border-emerald-500/30">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">RECOMENDADO</div>
              
              <div className="mb-6">
                <div className="text-emerald-400 font-bold mb-2 uppercase tracking-wide text-xs bg-emerald-900/50 inline-block px-2 py-1 rounded">Intervención Activa</div>
                <h3 className="text-2xl font-bold text-white">Plan Integral Clínico</h3>
                <p className="text-slate-400 text-sm mt-2">Para biohacking, tratamiento y recuperación.</p>
              </div>
              
              <div className="text-4xl font-bold text-white mb-6">
                4 <span className="text-lg font-normal text-slate-400">Kits / Año</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-slate-300 flex-1">
                <li className="flex gap-3">
                  <div className="bg-emerald-500/20 p-1 rounded-full h-fit"><Star className="w-4 h-4 text-emerald-400" /></div>
                  <span className="text-sm text-white"><strong>Secuenciación Trimestral</strong> (Alta Profundidad)</span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-emerald-500/20 p-1 rounded-full h-fit"><ShieldCheck className="w-4 h-4 text-emerald-400" /></div>
                  <span className="text-sm text-white"><strong>Validación por Experto</strong> Humano</span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-emerald-500/20 p-1 rounded-full h-fit"><MessageCircle className="w-4 h-4 text-emerald-400" /></div>
                  <span className="text-sm text-white"><strong>8 Consultas de Seguimiento</strong> (Nutrición)</span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-emerald-500/20 p-1 rounded-full h-fit"><Check className="w-4 h-4 text-emerald-400" /></div>
                  <span className="text-sm">Plan de Suplementación Dinámico</span>
                </li>
              </ul>
              
              <button onClick={onLaunchDemo} className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition shadow-lg shadow-emerald-900/20">
                Empezar Tratamiento
              </button>
            </div>
          </div>

          {/* B2B Banner */}
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-100 to-white border border-slate-200 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                   <Users className="w-5 h-5 text-slate-500" />
                   Alianzas Institucionales
                </h3>
                <p className="text-slate-600 text-sm max-w-lg">
                   Infraestructura de diagnóstico para clínicas de obesidad y bariátrica. Precios por volumen y dashboard centralizado de pacientes.
                </p>
             </div>
             <button className="px-6 py-3 bg-white border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition whitespace-nowrap">
                Contactar Ventas B2B
             </button>
          </div>

        </div>
      </section>

      {/* Slide 10: Footer / Team */}
      <footer className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
               <h2 className="text-2xl font-bold text-slate-900 mb-8">Liderazgo Científico</h2>
               
               <div className="space-y-8">
                  {/* Rafik */}
                  <div className="flex gap-4">
                     <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden border border-slate-300 shrink-0">
                       <img src="https://ui-avatars.com/api/?name=Rafik+Neme&background=0D8ABC&color=fff" alt="Rafik" />
                     </div>
                     <div>
                       <p className="font-bold text-slate-900 text-lg">Rafik Tarek Neme Garrido, Dr. rer. nat.</p>
                       <p className="text-sm text-emerald-600 font-medium mb-1">Director Científico (CSO)</p>
                       <p className="text-sm text-slate-600 leading-snug">
                         Experto en genómica evolutiva. Visionario detrás del algoritmo ISEM para traducir complejidad biológica en utilidad clínica.
                       </p>
                     </div>
                  </div>

                  {/* Eder */}
                  <div className="flex gap-4">
                     <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden border border-slate-300 shrink-0">
                       <img src="https://ui-avatars.com/api/?name=Eder+Hernandez&background=059669&color=fff" alt="Eder" />
                     </div>
                     <div>
                       <p className="font-bold text-slate-900 text-lg">Dr. Eder Hernández Ruíz</p>
                       <p className="text-sm text-blue-600 font-medium mb-1">Director Médico</p>
                       <p className="text-sm text-slate-600 leading-snug">
                         Líder del Programa Clínica de Obesidad (HUN). Garante de la aplicabilidad clínica y seguridad del paciente.
                       </p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Próximo Hito: Validación Local</h2>
              <div className="mb-6">
                 <p className="text-slate-600 mb-2">Requerimiento para ejecución del proyecto:</p>
                 <p className="text-3xl font-bold text-slate-900">30 Millones COP</p>
                 <p className="text-sm text-emerald-600 font-medium mt-1">Duración estimada: 6 Meses</p>
              </div>
              <ul className="mb-8 space-y-3 text-slate-700">
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500" /> <strong>60 Voluntarios</strong> (Hospital Universidad del Norte)</li>
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500" /> Reactivos y Secuenciación Local</li>
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500" /> Validación de Algoritmo en Población Caribe</li>
              </ul>
              <div>
                <p className="font-bold text-slate-900 mb-1">Contacto Directo</p>
                <a href="mailto:rneme@uninorte.edu.co" className="text-emerald-600 hover:underline font-medium text-lg">rneme@uninorte.edu.co</a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-slate-400 text-sm border-t border-slate-100 pt-8">
            &copy; 2024 MicroNutriBiome - GenBioDiv. Transformando datos en salud.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

// Helper component for footer icons
function CheckCircle(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}