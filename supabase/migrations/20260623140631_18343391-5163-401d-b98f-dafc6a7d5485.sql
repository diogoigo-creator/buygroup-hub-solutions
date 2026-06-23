
-- contact_submissions: replace permissive INSERT with validated WITH CHECK
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

CREATE POLICY "Anyone can submit validated contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(nome)) BETWEEN 2 AND 120
  AND char_length(trim(empresa)) BETWEEN 1 AND 160
  AND char_length(email) BETWEEN 5 AND 200
  AND email ~* '^[A-Za-z0-9._%%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND (telefone IS NULL OR char_length(telefone) <= 40)
  AND (interesse IS NULL OR char_length(interesse) <= 200)
  AND (volume_compras IS NULL OR char_length(volume_compras) <= 100)
  AND (compradores_internos IS NULL OR char_length(compradores_internos) <= 100)
  AND (desafio_compras IS NULL OR char_length(desafio_compras) <= 2000)
  AND (mensagem IS NULL OR char_length(mensagem) <= 5000)
);

-- course_signups: replace permissive INSERT with validated WITH CHECK
DROP POLICY IF EXISTS "Anyone can submit course signup" ON public.course_signups;

CREATE POLICY "Anyone can submit validated course signup"
ON public.course_signups
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(nome)) BETWEEN 2 AND 120
  AND char_length(trim(empresa)) BETWEEN 1 AND 160
  AND char_length(trim(cargo)) BETWEEN 1 AND 120
  AND char_length(email) BETWEEN 5 AND 200
  AND email ~* '^[A-Za-z0-9._%%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND char_length(telefone) BETWEEN 6 AND 40
  AND (curso IS NULL OR char_length(curso) <= 200)
  AND (tamanho IS NULL OR char_length(tamanho) <= 100)
  AND (formato IS NULL OR char_length(formato) <= 100)
  AND (mensagem IS NULL OR char_length(mensagem) <= 5000)
);
