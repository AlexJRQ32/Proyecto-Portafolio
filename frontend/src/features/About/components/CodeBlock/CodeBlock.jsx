import { useReveal } from '../../../../hooks/useReveal'

function CodeBlock({ code, codeLabel }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="about-code reveal" role="region" aria-label={codeLabel}>
      <span className="about-code-top">
        <span className="about-dot about-dot--red" />
        <span className="about-dot about-dot--yellow" />
        <span className="about-dot about-dot--green" />
      </span>
      <pre className="about-code-body">
        <code>
          <div className="about-code-line">
            <span className="code-kw">const</span>{' '}
            <span className="code-var">developer</span>{' '}
            <span className="code-punc">=</span>{' '}
            <span className="code-punc">{'{'}</span>
          </div>
          <div className="about-code-line about-indent-1">
            <span className="code-key">"{code.nombre}"</span>
            <span className="code-punc">: </span>
            <span className="code-str">"{code.nombreValue}"</span>
            <span className="code-punc">,</span>
          </div>
          <div className="about-code-line about-indent-1">
            <span className="code-key">"{code.rol}"</span>
            <span className="code-punc">: </span>
            <span className="code-str">"{code.rolValue}"</span>
            <span className="code-punc">,</span>
          </div>
          <div className="about-code-line about-indent-1">
            <span className="code-key">"{code.enfoque}"</span>
            <span className="code-punc">: </span>
            <span className="code-str">"{code.enfoqueValue}"</span>
            <span className="code-punc">,</span>
          </div>
          <div className="about-code-line about-indent-1">
            <span className="code-key">"{code.proyectos_reales}"</span>
            <span className="code-punc">: </span>
            <span className="code-punc">{'{'}</span>
          </div>
          <div className="about-code-line about-indent-2">
            <span className="code-key">"{code.islavic_landing}"</span>
            <span className="code-punc">: </span>
            <span className="code-str">"{code.islavicValue}"</span>
            <span className="code-punc">,</span>
          </div>
          <div className="about-code-line about-indent-2">
            <span className="code-key">"{code.openfinances}"</span>
            <span className="code-punc">: </span>
            <span className="code-str">"{code.openfinancesValue}"</span>
            <span className="code-punc">,</span>
          </div>
          <div className="about-code-line about-indent-2">
            <span className="code-key">"{code.openpaw}"</span>
            <span className="code-punc">: </span>
            <span className="code-str">"{code.openpawValue}"</span>
          </div>
          <div className="about-code-line about-indent-1">
            <span className="code-punc">{'}'},</span>
          </div>
          <div className="about-code-line about-indent-1">
            <span className="code-key">"{code.tests_e2e}"</span>
            <span className="code-punc">: </span>
            <span className="code-num">35</span>
            <span className="code-punc">,</span>
          </div>
          <div className="about-code-line about-indent-1">
            <span className="code-key">"{code.principio}"</span>
            <span className="code-punc">: </span>
            <span className="code-str">"{code.principioValue}"</span>
          </div>
          <div className="about-code-line">
            <span className="code-punc">{'}'}</span>
          </div>
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
