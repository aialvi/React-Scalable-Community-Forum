import { useNavigate } from 'react-router';
import { Button } from '@/components/Elements';
import { Head } from '@/components/Head';
import { useAuth } from '@/lib/auth';

export const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStart = () => {
    if (user) {
      navigate('/app');
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <>
      <Head description="Welcome to MyForum" />
      <div className="bg-white h-[100vh] flex items-center">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">MyForum</span>
          </h2>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button onClick={handleStart}>Get started</Button>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://github.com/alan2207/bulletproof-react"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
