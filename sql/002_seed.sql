INSERT INTO departments (name) VALUES
('Engineering'), ('HR'), ('Finance')
ON CONFLICT (name) DO NOTHING;
