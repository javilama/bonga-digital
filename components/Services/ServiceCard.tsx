// Opción: componente cliente
"use client";

type ServiceCardProps = {
  testId: string;
  title: string;
  description: string;
  Icon: React.ComponentType;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  testId,
  title,
  description,
  Icon,
}) => {
  return (
    <div
      className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
      data-testid={testId}
    >
      <div className="w-16 h-16 bg-bonga-yellow rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-bonga-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
