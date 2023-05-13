interface DeploymentProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: DeploymentProps) {
  return <>{params.id}</>;
}
