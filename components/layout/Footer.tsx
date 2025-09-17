// Opción: componente cliente
'use client';

const Footer = () => {
  return (
    <footer className="bg-bonga-dark text-white py-12" data-testid="main-footer">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-10 h-10 bg-bonga-yellow rounded-full flex items-center justify-center">
                            <span className="font-bold text-bonga-blue">BD</span>
                        </div>
                        <span className="text-lg font-bold">Bonga Digital</span>
                    </div>
                    <p className="text-gray-400">Transformamos ideas en soluciones digitales innovadoras.</p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Servicios</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-web">Desarrollo
                                Web</a></li>
                        <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-mobile">Apps
                                Móviles</a></li>
                        <li><a href="#" className="hover:text-white transition-colors"
                                data-testid="footer-consulting">Consultoría IT</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Productos</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-crm">BongaCRM</a>
                        </li>
                        <li><a href="#" className="hover:text-white transition-colors"
                                data-testid="footer-analytics">Analytics Pro</a></li>
                        <li><a href="#" className="hover:text-white transition-colors"
                                data-testid="footer-store">BongaStore</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Contacto</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li data-testid="footer-email">info@bongadigital.com</li>
                        <li data-testid="footer-phone">+57 304 642 1791</li>
                        <li data-testid="footer-address">Cartagena, Colombia</li>
                    </ul>
                </div>
            </div>

            <hr className="border-gray-600 my-8"/>

            <div className="text-center text-gray-400">
                <p>&copy; 2024 Bonga Digital — Hecho con 🥐 y ☕ </p>
                <p>Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
