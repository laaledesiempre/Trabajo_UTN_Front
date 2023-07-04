import React from 'react'

export const Footer = () => {
const footerLinks=["Ventas corporativas","Retribucion","Trabajos","Noticias", "Condiciones de venta", "Para colegas", "Programas Bonus", "Tarjetas de regalo", "Acreditacion de pagos", "Prestamos", "Entregas", "Centros de atencion", "Como hacer un pedido", "Formas de pago", "Cambios y devoluciones", "Garantia", "Estado de orden", "Conocimiento basico"]

    return (
    <footer>
        <div>
            <h2 className="footer-brand">IEmpanadas</h2>
            <div className="footer-street">
                <p>Av 25 de Mayo 2694</p>
                <p>Codigo postal: 413</p>
            </div>
        </div>

        <div className="footer-links-wrapper">
            {footerLinks.map(e=>{
                return(
                    <a href="#">{e}</a>
                )
            })}
        </div>

        <div className="footer-terms">
            <p>2023 Empanadas inc. Todos los derechos empanados</p>
            <p>Terminos y condiciones</p>
            <p>Politicas de privacidad</p>
        </div>
    </footer>
  )
}
