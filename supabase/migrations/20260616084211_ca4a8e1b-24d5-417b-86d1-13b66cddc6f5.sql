
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  empresa TEXT NOT NULL,
  email TEXT NOT NULL,
  interesse TEXT,
  volume_compras TEXT,
  compradores_internos TEXT,
  desafio_compras TEXT,
  mensagem TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE TABLE public.course_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  empresa TEXT NOT NULL,
  cargo TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  curso TEXT,
  tamanho TEXT,
  formato TEXT,
  mensagem TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.course_signups TO anon, authenticated;
GRANT ALL ON public.course_signups TO service_role;
ALTER TABLE public.course_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit course signup"
  ON public.course_signups FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
