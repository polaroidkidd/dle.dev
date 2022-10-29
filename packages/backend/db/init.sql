--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE IF EXISTS strapi;




--
-- Drop roles
--





--
-- Roles
--

CREATE ROLE "db-strapi-admin";
ALTER ROLE "db-strapi-admin" WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:mpDrsOwZ6XerbOW+480mnA==$f9Gim038kNPkBAQId0cLhR4Jg9LfFBP363sWGnPsGd0=:DtdIXYfb4vw7y/HdBIKo9PnLkHuYRq92+dc5FUe/D/c=';

ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:cmWKXAiSmonc3PkcV7HWCg==$QcLMZN7hIOUx4+4ubh0+8sGmvKualfveVp+Z+ADtGnc=:2/ZajusN24biprDUDVdV3kxg+SRsoA9U8wz6MMTMCtU=';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-2.pgdg110+2)
-- Dumped by pg_dump version 14.5 (Debian 14.5-2.pgdg110+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE IF EXISTS template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-2.pgdg110+2)
-- Dumped by pg_dump version 14.5 (Debian 14.5-2.pgdg110+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- Database "strapi" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-2.pgdg110+2)
-- Dumped by pg_dump version 14.5 (Debian 14.5-2.pgdg110+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: strapi; Type: DATABASE; Schema: -; Owner: db-strapi-admin
--

CREATE DATABASE strapi WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE strapi OWNER TO "db-strapi-admin";

\connect strapi

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: abouts; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.abouts (
    id integer NOT NULL,
    title character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.abouts OWNER TO "db-strapi-admin";

--
-- Name: abouts_components; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.abouts_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" integer DEFAULT 0
);


ALTER TABLE public.abouts_components OWNER TO "db-strapi-admin";

--
-- Name: abouts_components_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.abouts_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.abouts_components_id_seq OWNER TO "db-strapi-admin";

--
-- Name: abouts_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.abouts_components_id_seq OWNED BY public.abouts_components.id;


--
-- Name: abouts_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.abouts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.abouts_id_seq OWNER TO "db-strapi-admin";

--
-- Name: abouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.abouts_id_seq OWNED BY public.abouts.id;


--
-- Name: admin_permissions; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.admin_permissions (
    id integer NOT NULL,
    action character varying(255),
    subject character varying(255),
    properties jsonb,
    conditions jsonb,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.admin_permissions OWNER TO "db-strapi-admin";

--
-- Name: admin_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.admin_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_permissions_id_seq OWNER TO "db-strapi-admin";

--
-- Name: admin_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.admin_permissions_id_seq OWNED BY public.admin_permissions.id;


--
-- Name: admin_permissions_role_links; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.admin_permissions_role_links (
    id integer NOT NULL,
    permission_id integer,
    role_id integer
);


ALTER TABLE public.admin_permissions_role_links OWNER TO "db-strapi-admin";

--
-- Name: admin_permissions_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.admin_permissions_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_permissions_role_links_id_seq OWNER TO "db-strapi-admin";

--
-- Name: admin_permissions_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.admin_permissions_role_links_id_seq OWNED BY public.admin_permissions_role_links.id;


--
-- Name: admin_roles; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.admin_roles (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    description character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.admin_roles OWNER TO "db-strapi-admin";

--
-- Name: admin_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.admin_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_roles_id_seq OWNER TO "db-strapi-admin";

--
-- Name: admin_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.admin_roles_id_seq OWNED BY public.admin_roles.id;


--
-- Name: admin_users; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.admin_users (
    id integer NOT NULL,
    firstname character varying(255),
    lastname character varying(255),
    username character varying(255),
    email character varying(255),
    password character varying(255),
    reset_password_token character varying(255),
    registration_token character varying(255),
    is_active boolean,
    blocked boolean,
    prefered_language character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.admin_users OWNER TO "db-strapi-admin";

--
-- Name: admin_users_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.admin_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_users_id_seq OWNER TO "db-strapi-admin";

--
-- Name: admin_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.admin_users_id_seq OWNED BY public.admin_users.id;


--
-- Name: admin_users_roles_links; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.admin_users_roles_links (
    id integer NOT NULL,
    user_id integer,
    role_id integer
);


ALTER TABLE public.admin_users_roles_links OWNER TO "db-strapi-admin";

--
-- Name: admin_users_roles_links_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.admin_users_roles_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_users_roles_links_id_seq OWNER TO "db-strapi-admin";

--
-- Name: admin_users_roles_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.admin_users_roles_links_id_seq OWNED BY public.admin_users_roles_links.id;


--
-- Name: articles; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.articles (
    id integer NOT NULL,
    title character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.articles OWNER TO "db-strapi-admin";

--
-- Name: articles_components; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.articles_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" integer DEFAULT 0
);


ALTER TABLE public.articles_components OWNER TO "db-strapi-admin";

--
-- Name: articles_components_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.articles_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.articles_components_id_seq OWNER TO "db-strapi-admin";

--
-- Name: articles_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.articles_components_id_seq OWNED BY public.articles_components.id;


--
-- Name: articles_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.articles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.articles_id_seq OWNER TO "db-strapi-admin";

--
-- Name: articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.articles_id_seq OWNED BY public.articles.id;


--
-- Name: articles_tags_links; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.articles_tags_links (
    id integer NOT NULL,
    article_id integer,
    tag_id integer
);


ALTER TABLE public.articles_tags_links OWNER TO "db-strapi-admin";

--
-- Name: articles_tags_links_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.articles_tags_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.articles_tags_links_id_seq OWNER TO "db-strapi-admin";

--
-- Name: articles_tags_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.articles_tags_links_id_seq OWNED BY public.articles_tags_links.id;


--
-- Name: components_dynamic_images; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.components_dynamic_images (
    id integer NOT NULL
);


ALTER TABLE public.components_dynamic_images OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_images_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.components_dynamic_images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_dynamic_images_id_seq OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.components_dynamic_images_id_seq OWNED BY public.components_dynamic_images.id;


--
-- Name: components_dynamic_rich_texts; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.components_dynamic_rich_texts (
    id integer NOT NULL,
    rich_text text
);


ALTER TABLE public.components_dynamic_rich_texts OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_rich_texts_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.components_dynamic_rich_texts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_dynamic_rich_texts_id_seq OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_rich_texts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.components_dynamic_rich_texts_id_seq OWNED BY public.components_dynamic_rich_texts.id;


--
-- Name: components_dynamic_section_titles; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.components_dynamic_section_titles (
    id integer NOT NULL,
    chapter_title character varying(255),
    chapter_number numeric(10,2)
);


ALTER TABLE public.components_dynamic_section_titles OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_section_titles_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.components_dynamic_section_titles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_dynamic_section_titles_id_seq OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_section_titles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.components_dynamic_section_titles_id_seq OWNED BY public.components_dynamic_section_titles.id;


--
-- Name: components_dynamic_slideshows; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.components_dynamic_slideshows (
    id integer NOT NULL
);


ALTER TABLE public.components_dynamic_slideshows OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_slideshows_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.components_dynamic_slideshows_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_dynamic_slideshows_id_seq OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_slideshows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.components_dynamic_slideshows_id_seq OWNED BY public.components_dynamic_slideshows.id;


--
-- Name: components_dynamic_texts; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.components_dynamic_texts (
    id integer NOT NULL,
    text text
);


ALTER TABLE public.components_dynamic_texts OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_texts_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.components_dynamic_texts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_dynamic_texts_id_seq OWNER TO "db-strapi-admin";

--
-- Name: components_dynamic_texts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.components_dynamic_texts_id_seq OWNED BY public.components_dynamic_texts.id;


--
-- Name: components_shared_seos; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.components_shared_seos (
    id integer NOT NULL,
    meta_title character varying(255),
    meta_description character varying(255),
    keywords text,
    meta_robots character varying(255),
    meta_viewport character varying(255),
    canonical_url character varying(255)
);


ALTER TABLE public.components_shared_seos OWNER TO "db-strapi-admin";

--
-- Name: components_shared_seos_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.components_shared_seos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.components_shared_seos_id_seq OWNER TO "db-strapi-admin";

--
-- Name: components_shared_seos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.components_shared_seos_id_seq OWNED BY public.components_shared_seos.id;


--
-- Name: contacts; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    title character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.contacts OWNER TO "db-strapi-admin";

--
-- Name: contacts_components; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.contacts_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" integer DEFAULT 0
);


ALTER TABLE public.contacts_components OWNER TO "db-strapi-admin";

--
-- Name: contacts_components_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.contacts_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacts_components_id_seq OWNER TO "db-strapi-admin";

--
-- Name: contacts_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.contacts_components_id_seq OWNED BY public.contacts_components.id;


--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacts_id_seq OWNER TO "db-strapi-admin";

--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- Name: files; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.files (
    id integer NOT NULL,
    name character varying(255),
    alternative_text character varying(255),
    caption character varying(255),
    width integer,
    height integer,
    formats jsonb,
    hash character varying(255),
    ext character varying(255),
    mime character varying(255),
    size numeric(10,2),
    url character varying(255),
    preview_url character varying(255),
    provider character varying(255),
    provider_metadata jsonb,
    folder_path character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    placeholder text
);


ALTER TABLE public.files OWNER TO "db-strapi-admin";

--
-- Name: files_folder_links; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.files_folder_links (
    id integer NOT NULL,
    file_id integer,
    folder_id integer
);


ALTER TABLE public.files_folder_links OWNER TO "db-strapi-admin";

--
-- Name: files_folder_links_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.files_folder_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.files_folder_links_id_seq OWNER TO "db-strapi-admin";

--
-- Name: files_folder_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.files_folder_links_id_seq OWNED BY public.files_folder_links.id;


--
-- Name: files_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.files_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.files_id_seq OWNER TO "db-strapi-admin";

--
-- Name: files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.files_id_seq OWNED BY public.files.id;


--
-- Name: files_related_morphs; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.files_related_morphs (
    id integer NOT NULL,
    file_id integer,
    related_id integer,
    related_type character varying(255),
    field character varying(255),
    "order" integer
);


ALTER TABLE public.files_related_morphs OWNER TO "db-strapi-admin";

--
-- Name: files_related_morphs_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.files_related_morphs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.files_related_morphs_id_seq OWNER TO "db-strapi-admin";

--
-- Name: files_related_morphs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.files_related_morphs_id_seq OWNED BY public.files_related_morphs.id;


--
-- Name: homes; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.homes (
    id integer NOT NULL,
    title character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.homes OWNER TO "db-strapi-admin";

--
-- Name: homes_components; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.homes_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" integer DEFAULT 0
);


ALTER TABLE public.homes_components OWNER TO "db-strapi-admin";

--
-- Name: homes_components_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.homes_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.homes_components_id_seq OWNER TO "db-strapi-admin";

--
-- Name: homes_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.homes_components_id_seq OWNED BY public.homes_components.id;


--
-- Name: homes_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.homes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.homes_id_seq OWNER TO "db-strapi-admin";

--
-- Name: homes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.homes_id_seq OWNED BY public.homes.id;


--
-- Name: i18n_locale; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.i18n_locale (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.i18n_locale OWNER TO "db-strapi-admin";

--
-- Name: i18n_locale_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.i18n_locale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.i18n_locale_id_seq OWNER TO "db-strapi-admin";

--
-- Name: i18n_locale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.i18n_locale_id_seq OWNED BY public.i18n_locale.id;


--
-- Name: strapi_api_tokens; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.strapi_api_tokens (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    type character varying(255),
    access_key character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_api_tokens OWNER TO "db-strapi-admin";

--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.strapi_api_tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_api_tokens_id_seq OWNER TO "db-strapi-admin";

--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.strapi_api_tokens_id_seq OWNED BY public.strapi_api_tokens.id;


--
-- Name: strapi_core_store_settings; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.strapi_core_store_settings (
    id integer NOT NULL,
    key character varying(255),
    value text,
    type character varying(255),
    environment character varying(255),
    tag character varying(255)
);


ALTER TABLE public.strapi_core_store_settings OWNER TO "db-strapi-admin";

--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.strapi_core_store_settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_core_store_settings_id_seq OWNER TO "db-strapi-admin";

--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.strapi_core_store_settings_id_seq OWNED BY public.strapi_core_store_settings.id;


--
-- Name: strapi_database_schema; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.strapi_database_schema (
    id integer NOT NULL,
    schema json,
    "time" timestamp without time zone,
    hash character varying(255)
);


ALTER TABLE public.strapi_database_schema OWNER TO "db-strapi-admin";

--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.strapi_database_schema_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_database_schema_id_seq OWNER TO "db-strapi-admin";

--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.strapi_database_schema_id_seq OWNED BY public.strapi_database_schema.id;


--
-- Name: strapi_migrations; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.strapi_migrations (
    id integer NOT NULL,
    name character varying(255),
    "time" timestamp without time zone
);


ALTER TABLE public.strapi_migrations OWNER TO "db-strapi-admin";

--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.strapi_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_migrations_id_seq OWNER TO "db-strapi-admin";

--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.strapi_migrations_id_seq OWNED BY public.strapi_migrations.id;


--
-- Name: strapi_webhooks; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.strapi_webhooks (
    id integer NOT NULL,
    name character varying(255),
    url text,
    headers jsonb,
    events jsonb,
    enabled boolean
);


ALTER TABLE public.strapi_webhooks OWNER TO "db-strapi-admin";

--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.strapi_webhooks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strapi_webhooks_id_seq OWNER TO "db-strapi-admin";

--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.strapi_webhooks_id_seq OWNED BY public.strapi_webhooks.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    tag character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.tags OWNER TO "db-strapi-admin";

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO "db-strapi-admin";

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: up_permissions; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.up_permissions (
    id integer NOT NULL,
    action character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_permissions OWNER TO "db-strapi-admin";

--
-- Name: up_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.up_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.up_permissions_id_seq OWNER TO "db-strapi-admin";

--
-- Name: up_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.up_permissions_id_seq OWNED BY public.up_permissions.id;


--
-- Name: up_permissions_role_links; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.up_permissions_role_links (
    id integer NOT NULL,
    permission_id integer,
    role_id integer
);


ALTER TABLE public.up_permissions_role_links OWNER TO "db-strapi-admin";

--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.up_permissions_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.up_permissions_role_links_id_seq OWNER TO "db-strapi-admin";

--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.up_permissions_role_links_id_seq OWNED BY public.up_permissions_role_links.id;


--
-- Name: up_roles; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.up_roles (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    type character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_roles OWNER TO "db-strapi-admin";

--
-- Name: up_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.up_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.up_roles_id_seq OWNER TO "db-strapi-admin";

--
-- Name: up_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.up_roles_id_seq OWNED BY public.up_roles.id;


--
-- Name: up_users; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.up_users (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    provider character varying(255),
    password character varying(255),
    reset_password_token character varying(255),
    confirmation_token character varying(255),
    confirmed boolean,
    blocked boolean,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_users OWNER TO "db-strapi-admin";

--
-- Name: up_users_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.up_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.up_users_id_seq OWNER TO "db-strapi-admin";

--
-- Name: up_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.up_users_id_seq OWNED BY public.up_users.id;


--
-- Name: up_users_role_links; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.up_users_role_links (
    id integer NOT NULL,
    user_id integer,
    role_id integer
);


ALTER TABLE public.up_users_role_links OWNER TO "db-strapi-admin";

--
-- Name: up_users_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.up_users_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.up_users_role_links_id_seq OWNER TO "db-strapi-admin";

--
-- Name: up_users_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.up_users_role_links_id_seq OWNED BY public.up_users_role_links.id;


--
-- Name: upload_folders; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.upload_folders (
    id integer NOT NULL,
    name character varying(255),
    path_id integer,
    path character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.upload_folders OWNER TO "db-strapi-admin";

--
-- Name: upload_folders_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.upload_folders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.upload_folders_id_seq OWNER TO "db-strapi-admin";

--
-- Name: upload_folders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.upload_folders_id_seq OWNED BY public.upload_folders.id;


--
-- Name: upload_folders_parent_links; Type: TABLE; Schema: public; Owner: db-strapi-admin
--

CREATE TABLE public.upload_folders_parent_links (
    id integer NOT NULL,
    folder_id integer,
    inv_folder_id integer
);


ALTER TABLE public.upload_folders_parent_links OWNER TO "db-strapi-admin";

--
-- Name: upload_folders_parent_links_id_seq; Type: SEQUENCE; Schema: public; Owner: db-strapi-admin
--

CREATE SEQUENCE public.upload_folders_parent_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.upload_folders_parent_links_id_seq OWNER TO "db-strapi-admin";

--
-- Name: upload_folders_parent_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-strapi-admin
--

ALTER SEQUENCE public.upload_folders_parent_links_id_seq OWNED BY public.upload_folders_parent_links.id;


--
-- Name: abouts id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.abouts ALTER COLUMN id SET DEFAULT nextval('public.abouts_id_seq'::regclass);


--
-- Name: abouts_components id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.abouts_components ALTER COLUMN id SET DEFAULT nextval('public.abouts_components_id_seq'::regclass);


--
-- Name: admin_permissions id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_permissions ALTER COLUMN id SET DEFAULT nextval('public.admin_permissions_id_seq'::regclass);


--
-- Name: admin_permissions_role_links id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_permissions_role_links ALTER COLUMN id SET DEFAULT nextval('public.admin_permissions_role_links_id_seq'::regclass);


--
-- Name: admin_roles id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_roles ALTER COLUMN id SET DEFAULT nextval('public.admin_roles_id_seq'::regclass);


--
-- Name: admin_users id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_users ALTER COLUMN id SET DEFAULT nextval('public.admin_users_id_seq'::regclass);


--
-- Name: admin_users_roles_links id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_users_roles_links ALTER COLUMN id SET DEFAULT nextval('public.admin_users_roles_links_id_seq'::regclass);


--
-- Name: articles id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles ALTER COLUMN id SET DEFAULT nextval('public.articles_id_seq'::regclass);


--
-- Name: articles_components id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles_components ALTER COLUMN id SET DEFAULT nextval('public.articles_components_id_seq'::regclass);


--
-- Name: articles_tags_links id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles_tags_links ALTER COLUMN id SET DEFAULT nextval('public.articles_tags_links_id_seq'::regclass);


--
-- Name: components_dynamic_images id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_images ALTER COLUMN id SET DEFAULT nextval('public.components_dynamic_images_id_seq'::regclass);


--
-- Name: components_dynamic_rich_texts id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_rich_texts ALTER COLUMN id SET DEFAULT nextval('public.components_dynamic_rich_texts_id_seq'::regclass);


--
-- Name: components_dynamic_section_titles id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_section_titles ALTER COLUMN id SET DEFAULT nextval('public.components_dynamic_section_titles_id_seq'::regclass);


--
-- Name: components_dynamic_slideshows id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_slideshows ALTER COLUMN id SET DEFAULT nextval('public.components_dynamic_slideshows_id_seq'::regclass);


--
-- Name: components_dynamic_texts id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_texts ALTER COLUMN id SET DEFAULT nextval('public.components_dynamic_texts_id_seq'::regclass);


--
-- Name: components_shared_seos id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_shared_seos ALTER COLUMN id SET DEFAULT nextval('public.components_shared_seos_id_seq'::regclass);


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- Name: contacts_components id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.contacts_components ALTER COLUMN id SET DEFAULT nextval('public.contacts_components_id_seq'::regclass);


--
-- Name: files id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files ALTER COLUMN id SET DEFAULT nextval('public.files_id_seq'::regclass);


--
-- Name: files_folder_links id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files_folder_links ALTER COLUMN id SET DEFAULT nextval('public.files_folder_links_id_seq'::regclass);


--
-- Name: files_related_morphs id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files_related_morphs ALTER COLUMN id SET DEFAULT nextval('public.files_related_morphs_id_seq'::regclass);


--
-- Name: homes id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.homes ALTER COLUMN id SET DEFAULT nextval('public.homes_id_seq'::regclass);


--
-- Name: homes_components id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.homes_components ALTER COLUMN id SET DEFAULT nextval('public.homes_components_id_seq'::regclass);


--
-- Name: i18n_locale id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.i18n_locale ALTER COLUMN id SET DEFAULT nextval('public.i18n_locale_id_seq'::regclass);


--
-- Name: strapi_api_tokens id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_api_tokens ALTER COLUMN id SET DEFAULT nextval('public.strapi_api_tokens_id_seq'::regclass);


--
-- Name: strapi_core_store_settings id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_core_store_settings ALTER COLUMN id SET DEFAULT nextval('public.strapi_core_store_settings_id_seq'::regclass);


--
-- Name: strapi_database_schema id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_database_schema ALTER COLUMN id SET DEFAULT nextval('public.strapi_database_schema_id_seq'::regclass);


--
-- Name: strapi_migrations id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_migrations ALTER COLUMN id SET DEFAULT nextval('public.strapi_migrations_id_seq'::regclass);


--
-- Name: strapi_webhooks id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_webhooks ALTER COLUMN id SET DEFAULT nextval('public.strapi_webhooks_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: up_permissions id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_permissions ALTER COLUMN id SET DEFAULT nextval('public.up_permissions_id_seq'::regclass);


--
-- Name: up_permissions_role_links id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_permissions_role_links ALTER COLUMN id SET DEFAULT nextval('public.up_permissions_role_links_id_seq'::regclass);


--
-- Name: up_roles id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_roles ALTER COLUMN id SET DEFAULT nextval('public.up_roles_id_seq'::regclass);


--
-- Name: up_users id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_users ALTER COLUMN id SET DEFAULT nextval('public.up_users_id_seq'::regclass);


--
-- Name: up_users_role_links id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_users_role_links ALTER COLUMN id SET DEFAULT nextval('public.up_users_role_links_id_seq'::regclass);


--
-- Name: upload_folders id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders ALTER COLUMN id SET DEFAULT nextval('public.upload_folders_id_seq'::regclass);


--
-- Name: upload_folders_parent_links id; Type: DEFAULT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders_parent_links ALTER COLUMN id SET DEFAULT nextval('public.upload_folders_parent_links_id_seq'::regclass);


--
-- Data for Name: abouts; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.abouts (id, title, created_at, updated_at, published_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: abouts_components; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.abouts_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
\.


--
-- Data for Name: admin_permissions; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.admin_permissions (id, action, subject, properties, conditions, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
5	plugin::content-manager.explorer.create	api::tag.tag	{"fields": ["tag", "articles"]}	[]	2022-09-25 20:44:10.383	2022-09-25 20:44:10.383	\N	\N
10	plugin::content-manager.explorer.read	api::tag.tag	{"fields": ["tag", "articles"]}	[]	2022-09-25 20:44:10.395	2022-09-25 20:44:10.395	\N	\N
15	plugin::content-manager.explorer.update	api::tag.tag	{"fields": ["tag", "articles"]}	[]	2022-09-25 20:44:10.407	2022-09-25 20:44:10.407	\N	\N
16	plugin::content-manager.explorer.delete	api::about.about	{}	[]	2022-09-25 20:44:10.41	2022-09-25 20:44:10.41	\N	\N
17	plugin::content-manager.explorer.delete	api::article.article	{}	[]	2022-09-25 20:44:10.412	2022-09-25 20:44:10.412	\N	\N
18	plugin::content-manager.explorer.delete	api::contact.contact	{}	[]	2022-09-25 20:44:10.415	2022-09-25 20:44:10.415	\N	\N
19	plugin::content-manager.explorer.delete	api::home.home	{}	[]	2022-09-25 20:44:10.417	2022-09-25 20:44:10.417	\N	\N
20	plugin::content-manager.explorer.delete	api::tag.tag	{}	[]	2022-09-25 20:44:10.419	2022-09-25 20:44:10.419	\N	\N
21	plugin::content-manager.explorer.publish	api::about.about	{}	[]	2022-09-25 20:44:10.422	2022-09-25 20:44:10.422	\N	\N
22	plugin::content-manager.explorer.publish	api::article.article	{}	[]	2022-09-25 20:44:10.424	2022-09-25 20:44:10.424	\N	\N
23	plugin::content-manager.explorer.publish	api::contact.contact	{}	[]	2022-09-25 20:44:10.427	2022-09-25 20:44:10.427	\N	\N
24	plugin::content-manager.explorer.publish	api::home.home	{}	[]	2022-09-25 20:44:10.43	2022-09-25 20:44:10.43	\N	\N
25	plugin::content-manager.explorer.publish	api::tag.tag	{}	[]	2022-09-25 20:44:10.432	2022-09-25 20:44:10.432	\N	\N
26	plugin::upload.read	\N	{}	[]	2022-09-25 20:44:10.434	2022-09-25 20:44:10.434	\N	\N
27	plugin::upload.assets.create	\N	{}	[]	2022-09-25 20:44:10.436	2022-09-25 20:44:10.436	\N	\N
28	plugin::upload.assets.update	\N	{}	[]	2022-09-25 20:44:10.439	2022-09-25 20:44:10.439	\N	\N
29	plugin::upload.assets.download	\N	{}	[]	2022-09-25 20:44:10.441	2022-09-25 20:44:10.441	\N	\N
30	plugin::upload.assets.copy-link	\N	{}	[]	2022-09-25 20:44:10.443	2022-09-25 20:44:10.443	\N	\N
98	plugin::documentation.settings.update	\N	{}	[]	2022-09-25 20:44:10.619	2022-09-25 20:44:10.619	\N	\N
99	plugin::documentation.settings.regenerate	\N	{}	[]	2022-09-25 20:44:10.621	2022-09-25 20:44:10.621	\N	\N
4	plugin::content-manager.explorer.create	api::home.home	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-09-25 20:44:10.38	2022-10-02 21:16:54.43	\N	\N
8	plugin::content-manager.explorer.read	api::contact.contact	{"fields": ["title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-09-25 20:44:10.39	2022-10-02 21:16:54.43	\N	\N
9	plugin::content-manager.explorer.read	api::home.home	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-09-25 20:44:10.393	2022-10-02 21:16:54.43	\N	\N
11	plugin::content-manager.explorer.update	api::about.about	{"fields": ["Title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-09-25 20:44:10.398	2022-10-02 21:16:54.43	\N	\N
13	plugin::content-manager.explorer.update	api::contact.contact	{"fields": ["title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-09-25 20:44:10.402	2022-10-02 21:16:54.43	\N	\N
14	plugin::content-manager.explorer.update	api::home.home	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-09-25 20:44:10.405	2022-10-02 21:16:54.43	\N	\N
31	plugin::content-manager.explorer.create	api::about.about	{"fields": ["Title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	["admin::is-creator"]	2022-09-25 20:44:10.447	2022-10-02 21:16:54.43	\N	\N
12	plugin::content-manager.explorer.update	api::article.article	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tags"]}	[]	2022-09-25 20:44:10.4	2022-10-02 21:16:54.43	\N	\N
35	plugin::content-manager.explorer.create	api::tag.tag	{"fields": ["tag", "articles"]}	["admin::is-creator"]	2022-09-25 20:44:10.457	2022-09-25 20:44:10.457	\N	\N
40	plugin::content-manager.explorer.read	api::tag.tag	{"fields": ["tag", "articles"]}	["admin::is-creator"]	2022-09-25 20:44:10.469	2022-09-25 20:44:10.469	\N	\N
45	plugin::content-manager.explorer.update	api::tag.tag	{"fields": ["tag", "articles"]}	["admin::is-creator"]	2022-09-25 20:44:10.48	2022-09-25 20:44:10.48	\N	\N
46	plugin::content-manager.explorer.delete	api::about.about	{}	["admin::is-creator"]	2022-09-25 20:44:10.483	2022-09-25 20:44:10.483	\N	\N
47	plugin::content-manager.explorer.delete	api::article.article	{}	["admin::is-creator"]	2022-09-25 20:44:10.485	2022-09-25 20:44:10.485	\N	\N
48	plugin::content-manager.explorer.delete	api::contact.contact	{}	["admin::is-creator"]	2022-09-25 20:44:10.487	2022-09-25 20:44:10.487	\N	\N
49	plugin::content-manager.explorer.delete	api::home.home	{}	["admin::is-creator"]	2022-09-25 20:44:10.489	2022-09-25 20:44:10.489	\N	\N
50	plugin::content-manager.explorer.delete	api::tag.tag	{}	["admin::is-creator"]	2022-09-25 20:44:10.492	2022-09-25 20:44:10.492	\N	\N
51	plugin::upload.read	\N	{}	["admin::is-creator"]	2022-09-25 20:44:10.494	2022-09-25 20:44:10.494	\N	\N
52	plugin::upload.assets.create	\N	{}	[]	2022-09-25 20:44:10.496	2022-09-25 20:44:10.496	\N	\N
53	plugin::upload.assets.update	\N	{}	["admin::is-creator"]	2022-09-25 20:44:10.498	2022-09-25 20:44:10.498	\N	\N
54	plugin::upload.assets.download	\N	{}	[]	2022-09-25 20:44:10.501	2022-09-25 20:44:10.501	\N	\N
55	plugin::upload.assets.copy-link	\N	{}	[]	2022-09-25 20:44:10.503	2022-09-25 20:44:10.503	\N	\N
56	plugin::content-manager.explorer.create	plugin::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role"]}	[]	2022-09-25 20:44:10.518	2022-09-25 20:44:10.518	\N	\N
100	plugin::documentation.settings.read	\N	{}	[]	2022-09-25 20:44:10.623	2022-09-25 20:44:10.623	\N	\N
32	plugin::content-manager.explorer.create	api::article.article	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tags"]}	["admin::is-creator"]	2022-09-25 20:44:10.449	2022-10-02 21:16:54.43	\N	\N
33	plugin::content-manager.explorer.create	api::contact.contact	{"fields": ["title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	["admin::is-creator"]	2022-09-25 20:44:10.451	2022-10-02 21:16:54.43	\N	\N
34	plugin::content-manager.explorer.create	api::home.home	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	["admin::is-creator"]	2022-09-25 20:44:10.454	2022-10-02 21:16:54.43	\N	\N
36	plugin::content-manager.explorer.read	api::about.about	{"fields": ["Title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	["admin::is-creator"]	2022-09-25 20:44:10.459	2022-10-02 21:16:54.431	\N	\N
39	plugin::content-manager.explorer.read	api::home.home	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	["admin::is-creator"]	2022-09-25 20:44:10.466	2022-10-02 21:16:54.431	\N	\N
41	plugin::content-manager.explorer.update	api::about.about	{"fields": ["Title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	["admin::is-creator"]	2022-09-25 20:44:10.471	2022-10-02 21:16:54.431	\N	\N
42	plugin::content-manager.explorer.update	api::article.article	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tags"]}	["admin::is-creator"]	2022-09-25 20:44:10.474	2022-10-02 21:16:54.431	\N	\N
43	plugin::content-manager.explorer.update	api::contact.contact	{"fields": ["title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	["admin::is-creator"]	2022-09-25 20:44:10.476	2022-10-02 21:16:54.431	\N	\N
44	plugin::content-manager.explorer.update	api::home.home	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	["admin::is-creator"]	2022-09-25 20:44:10.478	2022-10-02 21:16:54.431	\N	\N
38	plugin::content-manager.explorer.read	api::contact.contact	{"fields": ["title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	["admin::is-creator"]	2022-09-25 20:44:10.464	2022-10-02 21:16:54.431	\N	\N
61	plugin::content-manager.explorer.create	api::tag.tag	{"fields": ["tag", "articles"]}	[]	2022-09-25 20:44:10.529	2022-09-25 20:44:10.529	\N	\N
62	plugin::content-manager.explorer.read	plugin::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role"]}	[]	2022-09-25 20:44:10.532	2022-09-25 20:44:10.532	\N	\N
67	plugin::content-manager.explorer.read	api::tag.tag	{"fields": ["tag", "articles"]}	[]	2022-09-25 20:44:10.544	2022-09-25 20:44:10.544	\N	\N
68	plugin::content-manager.explorer.update	plugin::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role"]}	[]	2022-09-25 20:44:10.547	2022-09-25 20:44:10.547	\N	\N
73	plugin::content-manager.explorer.update	api::tag.tag	{"fields": ["tag", "articles"]}	[]	2022-09-25 20:44:10.559	2022-09-25 20:44:10.559	\N	\N
74	plugin::content-manager.explorer.delete	plugin::users-permissions.user	{}	[]	2022-09-25 20:44:10.561	2022-09-25 20:44:10.561	\N	\N
75	plugin::content-manager.explorer.delete	api::about.about	{}	[]	2022-09-25 20:44:10.564	2022-09-25 20:44:10.564	\N	\N
76	plugin::content-manager.explorer.delete	api::article.article	{}	[]	2022-09-25 20:44:10.567	2022-09-25 20:44:10.567	\N	\N
77	plugin::content-manager.explorer.delete	api::contact.contact	{}	[]	2022-09-25 20:44:10.569	2022-09-25 20:44:10.569	\N	\N
78	plugin::content-manager.explorer.delete	api::home.home	{}	[]	2022-09-25 20:44:10.572	2022-09-25 20:44:10.572	\N	\N
79	plugin::content-manager.explorer.delete	api::tag.tag	{}	[]	2022-09-25 20:44:10.574	2022-09-25 20:44:10.574	\N	\N
80	plugin::content-manager.explorer.publish	api::about.about	{}	[]	2022-09-25 20:44:10.577	2022-09-25 20:44:10.577	\N	\N
81	plugin::content-manager.explorer.publish	api::article.article	{}	[]	2022-09-25 20:44:10.579	2022-09-25 20:44:10.579	\N	\N
82	plugin::content-manager.explorer.publish	api::contact.contact	{}	[]	2022-09-25 20:44:10.581	2022-09-25 20:44:10.581	\N	\N
83	plugin::content-manager.explorer.publish	api::home.home	{}	[]	2022-09-25 20:44:10.584	2022-09-25 20:44:10.584	\N	\N
84	plugin::content-manager.explorer.publish	api::tag.tag	{}	[]	2022-09-25 20:44:10.586	2022-09-25 20:44:10.586	\N	\N
85	plugin::content-manager.single-types.configure-view	\N	{}	[]	2022-09-25 20:44:10.588	2022-09-25 20:44:10.588	\N	\N
86	plugin::content-manager.collection-types.configure-view	\N	{}	[]	2022-09-25 20:44:10.59	2022-09-25 20:44:10.59	\N	\N
87	plugin::content-manager.components.configure-layout	\N	{}	[]	2022-09-25 20:44:10.593	2022-09-25 20:44:10.593	\N	\N
88	plugin::content-type-builder.read	\N	{}	[]	2022-09-25 20:44:10.595	2022-09-25 20:44:10.595	\N	\N
89	plugin::email.settings.read	\N	{}	[]	2022-09-25 20:44:10.597	2022-09-25 20:44:10.597	\N	\N
90	plugin::upload.read	\N	{}	[]	2022-09-25 20:44:10.6	2022-09-25 20:44:10.6	\N	\N
91	plugin::upload.assets.create	\N	{}	[]	2022-09-25 20:44:10.602	2022-09-25 20:44:10.602	\N	\N
92	plugin::upload.assets.update	\N	{}	[]	2022-09-25 20:44:10.605	2022-09-25 20:44:10.605	\N	\N
93	plugin::upload.assets.download	\N	{}	[]	2022-09-25 20:44:10.607	2022-09-25 20:44:10.607	\N	\N
94	plugin::upload.assets.copy-link	\N	{}	[]	2022-09-25 20:44:10.61	2022-09-25 20:44:10.61	\N	\N
95	plugin::upload.settings.read	\N	{}	[]	2022-09-25 20:44:10.612	2022-09-25 20:44:10.612	\N	\N
97	plugin::documentation.read	\N	{}	[]	2022-09-25 20:44:10.617	2022-09-25 20:44:10.617	\N	\N
101	plugin::i18n.locale.create	\N	{}	[]	2022-09-25 20:44:10.626	2022-09-25 20:44:10.626	\N	\N
102	plugin::i18n.locale.read	\N	{}	[]	2022-09-25 20:44:10.628	2022-09-25 20:44:10.628	\N	\N
103	plugin::i18n.locale.update	\N	{}	[]	2022-09-25 20:44:10.63	2022-09-25 20:44:10.63	\N	\N
104	plugin::i18n.locale.delete	\N	{}	[]	2022-09-25 20:44:10.633	2022-09-25 20:44:10.633	\N	\N
105	plugin::users-permissions.roles.create	\N	{}	[]	2022-09-25 20:44:10.635	2022-09-25 20:44:10.635	\N	\N
106	plugin::users-permissions.roles.read	\N	{}	[]	2022-09-25 20:44:10.637	2022-09-25 20:44:10.637	\N	\N
107	plugin::users-permissions.roles.update	\N	{}	[]	2022-09-25 20:44:10.639	2022-09-25 20:44:10.639	\N	\N
108	plugin::users-permissions.roles.delete	\N	{}	[]	2022-09-25 20:44:10.642	2022-09-25 20:44:10.642	\N	\N
109	plugin::users-permissions.providers.read	\N	{}	[]	2022-09-25 20:44:10.644	2022-09-25 20:44:10.644	\N	\N
110	plugin::users-permissions.providers.update	\N	{}	[]	2022-09-25 20:44:10.647	2022-09-25 20:44:10.647	\N	\N
111	plugin::users-permissions.email-templates.read	\N	{}	[]	2022-09-25 20:44:10.65	2022-09-25 20:44:10.65	\N	\N
112	plugin::users-permissions.email-templates.update	\N	{}	[]	2022-09-25 20:44:10.653	2022-09-25 20:44:10.653	\N	\N
113	plugin::users-permissions.advanced-settings.read	\N	{}	[]	2022-09-25 20:44:10.656	2022-09-25 20:44:10.656	\N	\N
114	plugin::users-permissions.advanced-settings.update	\N	{}	[]	2022-09-25 20:44:10.658	2022-09-25 20:44:10.658	\N	\N
115	admin::marketplace.read	\N	{}	[]	2022-09-25 20:44:10.661	2022-09-25 20:44:10.661	\N	\N
116	admin::marketplace.plugins.install	\N	{}	[]	2022-09-25 20:44:10.663	2022-09-25 20:44:10.663	\N	\N
117	admin::marketplace.plugins.uninstall	\N	{}	[]	2022-09-25 20:44:10.665	2022-09-25 20:44:10.665	\N	\N
118	admin::webhooks.create	\N	{}	[]	2022-09-25 20:44:10.668	2022-09-25 20:44:10.668	\N	\N
119	admin::webhooks.read	\N	{}	[]	2022-09-25 20:44:10.67	2022-09-25 20:44:10.67	\N	\N
120	admin::webhooks.update	\N	{}	[]	2022-09-25 20:44:10.673	2022-09-25 20:44:10.673	\N	\N
121	admin::webhooks.delete	\N	{}	[]	2022-09-25 20:44:10.675	2022-09-25 20:44:10.675	\N	\N
122	admin::users.create	\N	{}	[]	2022-09-25 20:44:10.678	2022-09-25 20:44:10.678	\N	\N
123	admin::users.read	\N	{}	[]	2022-09-25 20:44:10.68	2022-09-25 20:44:10.68	\N	\N
124	admin::users.update	\N	{}	[]	2022-09-25 20:44:10.683	2022-09-25 20:44:10.683	\N	\N
125	admin::users.delete	\N	{}	[]	2022-09-25 20:44:10.685	2022-09-25 20:44:10.685	\N	\N
126	admin::roles.create	\N	{}	[]	2022-09-25 20:44:10.688	2022-09-25 20:44:10.688	\N	\N
127	admin::roles.read	\N	{}	[]	2022-09-25 20:44:10.691	2022-09-25 20:44:10.691	\N	\N
128	admin::roles.update	\N	{}	[]	2022-09-25 20:44:10.693	2022-09-25 20:44:10.693	\N	\N
129	admin::roles.delete	\N	{}	[]	2022-09-25 20:44:10.696	2022-09-25 20:44:10.696	\N	\N
130	admin::api-tokens.create	\N	{}	[]	2022-09-25 20:44:10.698	2022-09-25 20:44:10.698	\N	\N
131	admin::api-tokens.read	\N	{}	[]	2022-09-25 20:44:10.7	2022-09-25 20:44:10.7	\N	\N
132	admin::api-tokens.update	\N	{}	[]	2022-09-25 20:44:10.704	2022-09-25 20:44:10.704	\N	\N
133	admin::api-tokens.delete	\N	{}	[]	2022-09-25 20:44:10.707	2022-09-25 20:44:10.707	\N	\N
134	admin::project-settings.update	\N	{}	[]	2022-09-25 20:44:10.709	2022-09-25 20:44:10.709	\N	\N
135	admin::project-settings.read	\N	{}	[]	2022-09-25 20:44:10.712	2022-09-25 20:44:10.712	\N	\N
139	plugin::content-manager.explorer.create	api::about.about	{"fields": ["Title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-10-02 21:16:54.374	2022-10-02 21:16:54.374	\N	\N
140	plugin::content-manager.explorer.create	api::article.article	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tags"]}	[]	2022-10-02 21:16:54.377	2022-10-02 21:16:54.377	\N	\N
141	plugin::content-manager.explorer.create	api::contact.contact	{"fields": ["title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-10-02 21:16:54.379	2022-10-02 21:16:54.379	\N	\N
143	plugin::content-manager.explorer.read	api::about.about	{"fields": ["Title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-10-02 21:16:54.384	2022-10-02 21:16:54.384	\N	\N
144	plugin::content-manager.explorer.read	api::article.article	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tags"]}	[]	2022-10-02 21:16:54.387	2022-10-02 21:16:54.387	\N	\N
145	plugin::content-manager.explorer.read	api::contact.contact	{"fields": ["title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-10-02 21:16:54.389	2022-10-02 21:16:54.389	\N	\N
147	plugin::content-manager.explorer.update	api::about.about	{"fields": ["Title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-10-02 21:16:54.394	2022-10-02 21:16:54.394	\N	\N
148	plugin::content-manager.explorer.update	api::article.article	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tags"]}	[]	2022-10-02 21:16:54.396	2022-10-02 21:16:54.396	\N	\N
149	plugin::content-manager.explorer.update	api::contact.contact	{"fields": ["title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-10-02 21:16:54.399	2022-10-02 21:16:54.399	\N	\N
1	plugin::content-manager.explorer.create	api::about.about	{"fields": ["Title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-09-25 20:44:10.372	2022-10-02 21:16:54.43	\N	\N
2	plugin::content-manager.explorer.create	api::article.article	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tags"]}	[]	2022-09-25 20:44:10.375	2022-10-02 21:16:54.43	\N	\N
3	plugin::content-manager.explorer.create	api::contact.contact	{"fields": ["title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-09-25 20:44:10.378	2022-10-02 21:16:54.43	\N	\N
6	plugin::content-manager.explorer.read	api::about.about	{"fields": ["Title", "dynamic", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL"]}	[]	2022-09-25 20:44:10.385	2022-10-02 21:16:54.43	\N	\N
7	plugin::content-manager.explorer.read	api::article.article	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tags"]}	[]	2022-09-25 20:44:10.388	2022-10-02 21:16:54.43	\N	\N
37	plugin::content-manager.explorer.read	api::article.article	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tags"]}	["admin::is-creator"]	2022-09-25 20:44:10.462	2022-10-02 21:16:54.431	\N	\N
151	plugin::content-manager.explorer.create	api::home.home	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tagLines"]}	[]	2022-10-16 19:07:33.54	2022-10-16 19:07:33.54	\N	\N
152	plugin::content-manager.explorer.read	api::home.home	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tagLines"]}	[]	2022-10-16 19:07:33.543	2022-10-16 19:07:33.543	\N	\N
153	plugin::content-manager.explorer.update	api::home.home	{"fields": ["title", "seo.metaTitle", "seo.metaDescription", "seo.keywords", "seo.metaRobots", "seo.metaViewport", "seo.canonicalURL", "dynamic", "tagLines"]}	[]	2022-10-16 19:07:33.546	2022-10-16 19:07:33.546	\N	\N
\.


--
-- Data for Name: admin_permissions_role_links; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.admin_permissions_role_links (id, permission_id, role_id) FROM stdin;
1	1	2
2	2	2
3	3	2
4	4	2
5	5	2
6	6	2
7	7	2
8	8	2
9	9	2
10	10	2
11	11	2
12	12	2
13	13	2
14	14	2
15	15	2
16	16	2
17	17	2
18	18	2
19	19	2
20	20	2
21	21	2
22	22	2
23	23	2
24	24	2
25	25	2
26	26	2
27	27	2
28	28	2
29	29	2
30	30	2
31	31	3
32	32	3
33	33	3
34	34	3
35	35	3
36	36	3
37	37	3
38	38	3
39	39	3
40	40	3
41	41	3
42	42	3
43	43	3
44	44	3
45	45	3
46	46	3
47	47	3
48	48	3
49	49	3
50	50	3
51	51	3
52	52	3
53	53	3
54	54	3
55	55	3
56	56	1
61	61	1
62	62	1
67	67	1
68	68	1
73	73	1
74	74	1
75	75	1
76	76	1
77	77	1
78	78	1
79	79	1
80	80	1
81	81	1
82	82	1
83	83	1
84	84	1
85	85	1
86	86	1
87	87	1
88	88	1
89	89	1
90	90	1
91	91	1
92	92	1
93	93	1
94	94	1
95	95	1
97	97	1
98	98	1
99	99	1
100	100	1
101	101	1
102	102	1
103	103	1
104	104	1
105	105	1
106	106	1
107	107	1
108	108	1
109	109	1
110	110	1
111	111	1
112	112	1
113	113	1
114	114	1
115	115	1
116	116	1
117	117	1
118	118	1
119	119	1
120	120	1
121	121	1
122	122	1
123	123	1
124	124	1
125	125	1
126	126	1
127	127	1
128	128	1
129	129	1
130	130	1
131	131	1
132	132	1
133	133	1
134	134	1
135	135	1
139	139	1
140	140	1
141	141	1
143	143	1
144	144	1
145	145	1
147	147	1
148	148	1
149	149	1
151	151	1
152	152	1
153	153	1
\.


--
-- Data for Name: admin_roles; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.admin_roles (id, name, code, description, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	Super Admin	strapi-super-admin	Super Admins can access and manage all features and settings.	2022-09-25 20:44:10.361	2022-09-25 20:44:10.361	\N	\N
2	Editor	strapi-editor	Editors can manage and publish contents including those of other users.	2022-09-25 20:44:10.364	2022-09-25 20:44:10.364	\N	\N
3	Author	strapi-author	Authors can manage the content they have created.	2022-09-25 20:44:10.366	2022-09-25 20:44:10.366	\N	\N
\.


--
-- Data for Name: admin_users; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.admin_users (id, firstname, lastname, username, email, password, reset_password_token, registration_token, is_active, blocked, prefered_language, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	Daniel	Einars	\N	noreply@dle.dev	$2a$10$T.Vr8TOmVV1Z4x1i98M2XOIoiRq6608fb7BbMcpaDQRtiqDwwgWvG	\N	\N	t	f	\N	2022-09-25 20:44:19.966	2022-09-25 20:44:19.966	\N	\N
\.


--
-- Data for Name: admin_users_roles_links; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.admin_users_roles_links (id, user_id, role_id) FROM stdin;
1	1	1
\.


--
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.articles (id, title, created_at, updated_at, published_at, created_by_id, updated_by_id) FROM stdin;
1	Advanced React Patterns V2	2022-09-25 12:39:19.298	2022-09-29 22:45:38.154	2022-09-29 22:45:38.151	\N	1
\.


--
-- Data for Name: articles_components; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.articles_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
103	1	1	shared.seo	seo	1
104	1	1	dynamic.section-title	dynamic	1
105	1	1	dynamic.text	dynamic	2
106	1	2	dynamic.section-title	dynamic	3
107	1	2	dynamic.text	dynamic	4
108	1	1	dynamic.rich-text	dynamic	5
109	1	3	dynamic.section-title	dynamic	6
110	1	2	dynamic.rich-text	dynamic	7
111	1	4	dynamic.section-title	dynamic	8
112	1	3	dynamic.rich-text	dynamic	9
113	1	5	dynamic.section-title	dynamic	10
114	1	4	dynamic.rich-text	dynamic	11
115	1	6	dynamic.section-title	dynamic	12
116	1	3	dynamic.text	dynamic	13
117	1	7	dynamic.section-title	dynamic	14
118	1	5	dynamic.rich-text	dynamic	15
119	1	8	dynamic.section-title	dynamic	16
120	1	6	dynamic.rich-text	dynamic	17
121	1	9	dynamic.section-title	dynamic	18
122	1	7	dynamic.rich-text	dynamic	19
123	1	10	dynamic.section-title	dynamic	20
124	1	4	dynamic.text	dynamic	21
125	1	11	dynamic.section-title	dynamic	22
126	1	8	dynamic.rich-text	dynamic	23
127	1	12	dynamic.section-title	dynamic	24
128	1	9	dynamic.rich-text	dynamic	25
129	1	13	dynamic.section-title	dynamic	26
130	1	10	dynamic.rich-text	dynamic	27
131	1	14	dynamic.section-title	dynamic	28
132	1	5	dynamic.text	dynamic	29
133	1	15	dynamic.section-title	dynamic	30
134	1	11	dynamic.rich-text	dynamic	31
135	1	16	dynamic.section-title	dynamic	32
136	1	12	dynamic.rich-text	dynamic	33
\.


--
-- Data for Name: articles_tags_links; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.articles_tags_links (id, article_id, tag_id) FROM stdin;
13	1	1
14	1	2
\.


--
-- Data for Name: components_dynamic_images; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.components_dynamic_images (id) FROM stdin;
2
1
\.


--
-- Data for Name: components_dynamic_rich_texts; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.components_dynamic_rich_texts (id, rich_text) FROM stdin;
5	\nThe idea behind render props is to give the user implementing the responsibillity and freedom to configure how the component renders.\nThis way the user has the possibillity to add additional functionallity to the component without having to re-implement anything.\n\n##### Example Render Prop Component:\n```jsx\nclass Toggle extends React.Component {\n  state = {on: false}\n  toggle = () =>\n    this.setState(\n      ({on}) => ({on: !on}),\n      () => {\n        this.props.onToggle(this.state.on)\n      },\n    )\n  render() {\n    const {on} = this.state\n    return this.props.children({on: on, toggle: this.toggle})\n  }\n\n```\n\nUsing the toggle component has requirements. Here we access the Toggle Components `on` and `toggle` function to define how the component is wired up.\n\n###### Example Usage render prop component\n```jsx\nfunction Usage({\n  onToggle = (...args) => console.log('onToggle', ...args),\n}) {\n  return (\n    <Toggle onToggle={onToggle}>\n      {({on, toggle}) => (\n        <div>\n          {on ? 'The button is on' : 'The button is off'}\n          <Switch on={on} onClick={toggle} />\n          <hr />\n          <button aria-label="custom-button" onClick={toggle}>\n            {on ? 'on' : 'off'}\n          </button>\n        </div>\n      )}\n    </Toggle>\n  )\n}\n\n```\n\n**What I learnt:**\n1. I can access functions and state from the implementing component of the render prop component.\n2. I *want* to render every state change.
6	When the responsibility of rendering shifts from the library to the user, the use is in charge of applying the correct props to the render prop components. In order to do this, it is helpful to provide `prop collection functions`. These functions retrieve the props, which are necessary for the components using render props to work. In the `Toggle` class we now provide a `togglerProps` object, which returns all the props reqired to use the `Toggle` class functionallity.\n```jsx\nclass Toggle extends React.Component {\n  state = {on: false}\n  toggle = () =>\n    this.setState(\n      ({on}) => ({on: !on}),\n      () => this.props.onToggle(this.state.on),\n    )\n  getStateAndHelpers() {\n    return {\n      on: this.state.on,\n      toggle: this.toggle,\n      togglerProps: {\n        'aria-pressed': this.state.on,\n        onClick: this.toggle,\n      },\n    }\n  }\n  render() {\n    return this.props.children(this.getStateAndHelpers())\n  }\n}\n```\n\nThese `togglerProps` are passed into the `props.children` method, which means that they are accessible to any component implementing the `Toggle` class. We can then use the pass the props to our components as needed.\n\n```jsx\nfunction Usage({\n  onToggle = (...args) => console.log('onToggle', ...args),\n}) {\n  return (\n    <Toggle onToggle={onToggle}>\n      {({on, togglerProps}) => (\n        <div>\n          <Switch on={on} {...togglerProps} />\n          <hr />\n          <button aria-label="custom-button" {...togglerProps}>\n            {on ? 'on' : 'off'}\n          </button>\n        </div>\n      )}\n    </Toggle>\n  )\n}\n\n```\n\n**What I learnt:**\n1.   I can provide functionality to users implementing my code in wrapped functions. They do not have to call every prop explicitly.
9	In this section we add a `type` to the toggle and reset button (`default`, `reset` `forced`) to allow the user to specify more detailed behavior. The usage is updated by including a `force update` button.\n\n```tsx\n[...]\n <button onClick={() => toggle({type: 'forced'})}>\n    Force Toggle\n</button>\n[...]\n```\n\nTo handle this type of behavior the `toggleReducer` needs to be updated as well to include the `forced` action.\n\n```tsx\n[...]\ntoggleStateReducer = (state, changes) => {\n    if (changes.type === 'forced') {\n      return changes\n    }\n    if (this.state.timesClicked >= 4) {\n      return {...changes, on: false}\n    }\n    return changes\n}\n[...]\n```
11	tern: Context API\n\nThis brief example shows how to use the context API. it is largly similar to compund components, with the exception that a pure context API implementation breaks render props. In order to do that we have to check if we're passing standard react "children" or actual functions.\n\n```tsx\nrender() {\nconst ui = typeof this.props.children === 'function' ? this.props.children(this.state) : this.props.children\nreturn (\n  <ToggleContext.Provider value={this.state}>\n    {ui}\n  </ToggleContext.Provider>\n)\n}\n```\n\n**What I learnt:**\n1. I have (re)-learnt that I can pass arguments to `this.props.children` and alter the child behavior with this.
7	\nThe problem with prop collections on their own is that you are not allowed to overwrite any props which are in the collection. In the above example the `togglerProps` object defines an `onClick` function, which is applied to the button via `...togglerProps`. If I want to define a custom onClick function (for example if I wanted to track clicks), I would have to define this `onClick` function explicity on the button. However, this overwrites the `onClick` function provided by the `togglerProps` object as shown behlow.\n\n```jsx\n  <button\n    aria-label="custom-button"\n    onClick={() => console.log("I've bene clicked!")}\n    {...togglerProps}>\n    {on ? 'on' : 'off'}\n  </button>\n```\n\nA possible fix for ths could be passing the `togglerProps` arguments to the new `onClick` function.\n```jsx\n  <button\n    aria-label="custom-button"\n    {...togglerProps}>\n    onClick={(...args) => {\n                togglerProps.onClick(...args) // fowrading all arguments, whatever they are\n                console.log("I've bene clicked!")}\n            }\n    {on ? 'on' : 'off'}\n  </button>\n```\n\nHowever, becomes cumbersome to implement at scale. In order to solve this we provide an `getTogglerProps` function, which we can pass our custom arguments to and let the render prop component handle what to do with them. For this to work we define the `getTogglerProps` function on the `Toggle` class. It accepts an object which will be the users custom attributes (for instance, the custom onClick function). The attributes which the render component cares about are extrated out (in this case, just the `onClick` function). The remaining attributes are spread out over the button.\n\n```jsx\nclass Toggle extends React.Component {\n  state = {on: false}\n  toggle = () =>\n    this.setState(\n      ({on}) => ({on: !on}),\n      () => this.props.onToggle(this.state.on),\n    )\n\n  getStateAndHelpers() {\n    return {\n      on: this.state.on,\n      toggle: this.toggle,\n      getTogglerProps: ({onClick, ...customProps}) => {\n        return {\n          onClick: (...args) => {\n            onClick && onClick(...args) //If `onClick` is passed as an argument, run it as well as our own toggle function.\n            this.toggle()\n          },\n          'aria-pressed': this.state.on,\n          ...customProps, //spread the rest of the custom attributes out over the button.\n        }\n      },\n    }\n  }\n\n  render() {\n    return this.props.children(this.getStateAndHelpers())\n  }\n}\n```\n\nIf you don't want to have to call each function individually, Kent provides a small utility function called `callAll`\n\n```jsx\nconst callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))\n```\n\nIt accepts any number of functions, which returns a function which accepts any number of arguments and then loops over each function and if it exists, calls it with the arguments. So, instead of this\n```jsx\n[...]\n ({onClick, ...customProps}) => {\n    return {\n      onClick: (...args) => {\n        onClick && onClick(...args) //If `onClick` is passed as an argument, run it as well as our own toggle function.\n        this.toggle()\n      },\n      'aria-pressed': this.state.on,\n      ...customProps, //spread the rest of the custom attributes out over the button.\n    }\n  },\n[...]\n```\nyou can have this (order does not matter):\n\n```jsx\nconst callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))\n\n[...]\n ({onClick, ...customProps}) => {\n    return {\n      onClick: callAll(this.toggle, onClick),\n      'aria-pressed': this.state.on,\n      ...customProps, //spread the rest of the custom attributes out over the button.\n    }\n  },\n[...]\n```\n**What I learnt:**\n1. I learnt how to effectively provide functionality to components without loosing the ability to pass custom attributes to components,which makes writing reusable components a lot easier.
12	Higher Order Components allow its user to share code. They accept a `Component`, add features to the component and return it. Typical implementations of these are found in react-redux, react-router, etc.\nThe `withToggle` function accepts a `React.Component`, applies the `Toggle.Consumer` logic from previous examples and returns the wrapped component. We have to ensure that props from the Compnent are passed to the wrapped component (done via spreading) as well as forwarding any `React.ref`s which might have been applied. Lastly, we ensure that any static propertis of the passed component are ***hoisted*** onto the wrapped component (using a library), otherwise these would be lost in the wrapped component.\n```tsx\nfunction withToggle(Component) {\n  const Wrapper = (props, ref) => {\n    return (\n      <Toggle.Consumer>\n        {toggleUtils => <Component toggle={toggleUtils} ref={ref} {...props}/>}\n      </Toggle.Consumer>\n    )\n  }\n  Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`\n  return hoistNonReactStatics(React.forwardRef(Wrapper), Component)\n}\n```\n\nWe can now easily create components which use the `Toggle.Consumr` without having to explicitly type it out in every component.\n\n**What I learnt:**\n  1. That I have to pass Refs along to the wrapped component\n  2. Hoisting the Static properties used to be cumbersome, but now there's a library for that :) (yay bundle size).
1	```typescript jsx\nstate = {on: falase}\n\nthis.setState((currentState) => {!currentState.on})\n\n```\nAdditionally, provide a `changeHandler` function to when updating the state, like so:\n\n```typescript jsx\n\nthis.setState((currentState) => {!currentState.on}, () => {\n    console.log("I have changed my state to: ", !currentState.on)\n})\n```\n\nThe `changeHandler` function can be passed in by the parent component and notify it of state changes. It's basically a funciton which runs every time the state has been updated.\n\n\n**What I learnt:**\n\n  1. Always use an updater function\n  2. I can provide change handlers to state update functions through props
2	Compound components have two characteristics:\n\n  1. They share state with their parent component\n  2. They are "useless" by themselves.\n\nCompound components are similar to html select elements:\n\n```html\n<select name="cars" id="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n  <option value="mercedes">Mercedes</option>\n  <option value="audi">Audi</option>\n</select>\n```\nThe `select` element can be used on its own, but it really only becomes useful when used in conjunction with the `option` elements.
4	The drawback of the above implementation is that it can not handle undefined elements, such as wrapping one of the Compounds in a `div` tag.\n\n``` tsx\nfunction Usage({\n  onToggle = (...args) => console.log('onToggle', ...args),\n}) {\n  return (\n    <Toggle onToggle={onToggle}>\n      <Toggle.On>The button is on</Toggle.On>\n      <Toggle.Off>The button is off</Toggle.Off>\n      <div>\n        <Toggle.Button />\n      </div>\n    </Toggle>\n  )\n}\n```\n\nTo deal with this, we provide use the `React.Context` api to only give props to those children which require them. First we need to create a context.\n\n```jsx\nconst ToggleContext = React.createContext({\n  on: false,\n  toggle: () => {},\n})\n```\n\nThe object passed into the `React.createContext` function is the default state. This state is consumed by the children. In order for them to be able to consume it, we need to provide it it the `render()` function of the `Toggle` class.\n\n```jsx\n  [...]\n  render() {\n    return (\n      <ToggleContext.Provider value={this.state}>\n        {this.props.children}\n      </ToggleContext.Provider>\n    )\n  }\n```\n\nThe `value` here is mapped to the component state.\n\n```jsx\n  [...]\n  toggle = () =>\n    this.setState(\n      ({on}) => ({on: !on}),\n      () => this.props.onToggle(this.state.on),\n    )\n  state = {on: false, toggle: this.toggle}\n```\n\nWe use the state because we want to hinder unnecessary rendering (react only renders components if their internal state has changed). It seems a bit odd at first, but we need to pass the `toggle` function into the state, so the children of the component can "consume" this function. We destructure the provided `on` in the consumer function, (we could also provide `contextValue` and check for `contextValue.on`) and either render the children, or don't.\n ```jsx\n  [...]\n  static On = ({children}) => (\n    <ToggleContext.Consumer>\n      {({on}) => (on ? children : null)}\n    </ToggleContext.Consumer>\n  )\n```\n\n The `Button` compound doesn't use the components toggle function, but consumes it from the provided context.\n ```jsx\n  [...]\n  static Button = (props) => (\n    <ToggleContext.Consumer>\n      {({on, toggle}) => (\n        <Switch on={on} onClick={toggle} {...props} />\n      )}\n    </ToggleContext.Consumer>\n  )\n```\n\n**What I learnt:**\n  1. That I can use `React.Context` in small components as well as in large applications. It remains isolated to this component.\n  2. How I can provide shared state to specific compound components.\n
3	Compound components can be defined in a similar fashion. The `static` instances can be iterated over using `React.Children.map` or `React.Children.forEach`. In this instance we use the `map` function because we want to return elements (as it is being done in the `render()` function) using the `React.cloneElement` function.\n\nThe `React.cloneElement` function creates a copy of the passed in component (in this case `static On`, `static Off` or `static Button`) and passing additional props to them like so:\n\n```typescript jsx\n[...]\n      return React.cloneElement(childElement, {\n        on: this.state.on,\n        toggle: this.toggle\n      })\n[...]\n```\n\nHere is the complete example.\n\n```typescript jsx\nimport React from "react";\n\nclass Toggle extends React.Component {\n\n  static On = (props) => props.on ? props.children : null;\n  static Off = (props) => props.on ? null: props.children;\n  static Button = ({on, toggle}) => <Switch on={on} onClick={toggle}/>\n\n  state = {on: false}\n  toggle = () =>\n    this.setState(\n      ({on}) => ({on: !on}),\n      () => this.props.onToggle(this.state.on),\n    )\n\n  render() {\n\n    return React.Children.map(this.props.children, childElement => {\n      return React.cloneElement(childElement, {\n        on: this.state.on,\n        toggle: this.toggle\n      })\n    })\n  }\n}\n\n```\n\n**What I learnt:**\n\n  1. I can create iterate over child components of a component using `React.Children.map` or `React.Children.forEach`\n  2. I can clone React elements using `React.cloneElement` and pass in new props (by passing them in).\n  3. This method stops me from having to implement conditional rendering (such as ` this.props.renderMessage ? this.props.renderMessage : undefined`)
8	When running applications you want to be able to control the initial state as well as be able to reset the state to the initial state. This exersize asks the user to allow for a passed initial state, adds a default initial state and adds a reset function, which resets the state to the passed initial state or the default state.\n\n#### What I learnt:\n  1. Be explicit about the initial state. Ideally have it in a separate object. When you change that `initialState` object, you won't have to worry about changing the initial state in a buch of other places.\n\n###  4.2. Controlling State: State Reducer\n\n  > If a render prop enables users to control how things are rendered, state reducers enable users to control how the logic works. (Kent C. Dodds)\n\nThis part deals with allowing the user to pass his own state management mechanism into the component. Keeping in fashion with the last examples, the added state reducer, which is passed into the `Toggle` class, looks like this. It allows the user to toggle the button four times. After that it only accepts changes to the state except `on`.\n\n```js\n[...]\n  toggleStateReducer = (state, changes) => {\n    if (this.state.timesClicked >= 4) {\n      return {...changes, on: false}\n    }\n    return changes\n  }\n[...]\n```\n\nIn order to allow the the `Toggle` class to accept a state management prop, we define our own `internalSetState` function like this and replace all existing `this.setState` calls with `this.internalSetState` (still passing in either the new state object, or the function which changes the state)\n\n```js\n[...]\ninternalSetState = (changes, callBack) => {\n    this.setState(currentState => {\n      return [changes]\n        .map(c => typeof c === 'function' ? c(currentState) : c)\n        .map(c => this.props.stateReducer(currentState, c) || {})\n        .map(c => Object.keys(c).length ? c : null)[0]\n    }, callBack)\n}\n[...]\n```\n\nThere are a couple of things going on here, so let me go into some detail. Like the `this.setState` function, the `internalSetState` function also accepts a changes object or function and a callback (to be executed after the state changes have propagated).\n\n  1. `this.setState(currentState => {`... : Because we still want to manage state, we call the `this.setState` function but request our current state with it.\n  2.  `return [changes]` : we wrap the new changes in an array so we can use `map` to iterate over the changes\n  3. `.map(c => typeof c === 'function' ? c(currentState) : c)`: We check if the passed changes are a function or an object (as `this.setState accepts both, we also need to accept both) and retrieve the state by either returning it directly or running the passed changes function.\n  4. `.map(c => this.props.stateReducer(currentState, c) || {})`: We call the stateReducer provided by the user implementing our `Toggle` class\n  5. `.map(c => Object.keys(c).length ? c : null)[0]`: In th event that `this.props.stateReducer(currentState, c)` returned an empty object we return null in order to prevent unnecessary rerenders. Lastly we grab the first item in the array with `[0]`, which is our state object.\n  6. `}, callBack)`: We run the callback.\n\n\n\n(example replaced `this.setState` function)\n\n```js\n[...]\n    this.internalSetState(\n      ({on}) => ({on: !on}),\n      () => this.props.onToggle(this.state.on),\n    )\n[...]\n```\n\n**What I learnt:**\n1.   I've learnt how to guard against empty objects in state updates (`Object.keys(object).length ? ...`)\n2.   I can now write components which could either manage their own state, or allow the user to manage their state, by writing a custom `internalSetState` function, which accept external state reducer functions. Writing state based components in this way makes them more reusable, especially when combining this with the render prop pattern.
10	\nThis section elaborates on how to facilitate state management through props. This allows to determine a component's behavior through props and/or through state.\nIf you want to be able to do both, you have to check if a state update is coming in through props or if it's part of the state. This can easily be done by checking if the prop  in question is `undefined`.\n\n```ts\n  isControlled = (prop) => this.props[prop] !== undefined\n```\n\nIf a state update comes in through the props, it stands to reason that it ***exists in the props*** (otherwise it must come from the component itself either through User Input or some other action).\n\nAdditionally you then need to merge the external and internal state. Such a function could look like this:\n\n```ts\n  getState = (state) => {\n    return Object.entries(state).reduce(\n      (mergedState, [key, value]) => {\n        if (this.isControlled(key)) {\n          mergedState[key] = this.props[key]\n        } else {\n          mergedState[key] = value\n        }\n        return mergedState\n      },\n      {},\n    )\n  }\n```\n\nIn the example by Kent, he worked the code required to use an external reducer as well. In essence it filters and returns changes, which are not controlled (external input), but still calls the `onStateChange` prop with all changes.\n\n**What I learnt:**\n1. Clever uses for `Object`\n2. How to merge internal and external states.
\.


--
-- Data for Name: components_dynamic_section_titles; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.components_dynamic_section_titles (id, chapter_title, chapter_number) FROM stdin;
1	Intro	1.00
2	Basic Toggle Component	1.10
4	React Compound Component: Basic	2.20
3	Compound Components	2.00
5	React Compound Component: Flexible	2.20
6	Render Props	3.00
7	Render Props: Basic	3.10
8	Render Props: Prop Collections	3.20
10	Controlling State	4.00
11	Controlling State: State Initializers	4.10
9	Render Props: Prop Getters	3.30
13	Controlling State: Control Props	4.30
14	Provider Pattern	5.00
15	Provider Pattern: Context API	5.10
12	Controlling State: State Reducers with Change Types	4.20
16	Provider Pattern: Higher Order Components	5.20
\.


--
-- Data for Name: components_dynamic_slideshows; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.components_dynamic_slideshows (id) FROM stdin;
\.


--
-- Data for Name: components_dynamic_texts; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.components_dynamic_texts (id, text) FROM stdin;
1	\N
2	\N
3	\N
4	\N
5	\N
6	Hi! Welcome to my little corner of the internet. I build websites for a living and a passion. Apart from that I enjoy maintaining my own publicly available applications such as nextcloud or librephotos, taking walks with my dog or riding my motorcycle through the swiss alps or the schwarzwald.\n\nIf you're looking for someone to build you a website, set up & maintain a home-server or consult on a enterprise web project, you've come to the right chap.\n\nFeel free to look around or drop me a message via the contact form, email or twitter.
8	build web applications.
9	increase conversions.
10	generate leads.
11	tackle technical debt.
12	design customer journeys.
13	optimize landingpages.
14	improve customer retention.
15	boost developer productivity.
16	grow.
7	Hi! Welcome to my little corner of the internet. I build websites for a living and a passion. Apart from that I enjoy maintaining my own publicly available applications such as nextcloud or librephotos, taking walks with my dog or riding my motorcycle through the swiss alps or the schwarzwald.\n\nIf you're looking for someone to build you a website, set up & maintain a home-server or consult on a enterprise web project, you've come to the right chap.\n\nFeel free to look around or drop me a message via the contact form, email or twitter.
17	build web applications.
18	increase conversions.
19	generate leads.
20	tackle technical debt.
21	design customer journeys.
22	optimize landingpages.
23	improve customer retention.
24	boost developer productivity.
25	grow.
\.


--
-- Data for Name: components_shared_seos; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.components_shared_seos (id, meta_title, meta_description, keywords, meta_robots, meta_viewport, canonical_url) FROM stdin;
1	Advanced React Patterns V2	Summary of Kent Dodds Advanced React Patterns V2 course	react, typescript	all	width=device-width, initial-scale=1	https://dle.dev/blog/Advanced-React-Patterns-V2
3	dle	Building  engaging, performant and memorable websites. 	web, developer, react, typescript	all	<meta name=”viewport” content=”width=device-width, initial-scale=1″>	https://dle.dev
2	dle	Building  engaging, performant and memorable websites. 	web, developer, react, typescript	all	<meta name=”viewport” content=”width=device-width, initial-scale=1″>	https://dle.dev
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.contacts (id, title, created_at, updated_at, published_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: contacts_components; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.contacts_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
\.


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.files (id, name, alternative_text, caption, width, height, formats, hash, ext, mime, size, url, preview_url, provider, provider_metadata, folder_path, created_at, updated_at, created_by_id, updated_by_id, placeholder) FROM stdin;
1	apple-touch-icon.png	apple-touch-icon.png	apple-touch-icon.png	180	180	{"thumbnail": {"ext": ".png", "url": "/uploads/thumbnail_apple_touch_icon_35dbc37cf8.png", "hash": "thumbnail_apple_touch_icon_35dbc37cf8", "mime": "image/png", "name": "thumbnail_apple-touch-icon.png", "path": null, "size": 8.25, "width": 156, "height": 156}}	apple_touch_icon_35dbc37cf8	.png	image/png	5.71	/uploads/apple_touch_icon_35dbc37cf8.png	\N	local	\N	/	2022-09-28 20:25:43.287	2022-09-28 20:25:43.287	1	1	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/ABISFSkpLBkZHAUFDQCAgILx8fOhoaZoZ2wA+fn719fa/v3/tra4ACsrLisrLicnKhsbHgb3FP7GWPipAAAAAElFTkSuQmCC
2	daniel_einars-400x500.3aa2364c.jpg	daniel_einars-400x500.3aa2364c.jpg	daniel_einars-400x500.3aa2364c.jpg	400	500	{"thumbnail": {"ext": ".jpg", "url": "/uploads/thumbnail_daniel_einars_400x500_3aa2364c_963277feb5.jpg", "hash": "thumbnail_daniel_einars_400x500_3aa2364c_963277feb5", "mime": "image/jpeg", "name": "thumbnail_daniel_einars-400x500.3aa2364c.jpg", "path": null, "size": 3.73, "width": 125, "height": 156}}	daniel_einars_400x500_3aa2364c_963277feb5	.jpg	image/jpeg	14.02	/uploads/daniel_einars_400x500_3aa2364c_963277feb5.jpg	\N	local	\N	/	2022-09-28 20:26:11.445	2022-09-28 20:26:11.445	1	1	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AOno6Lerpff29wDn2dXYoYT37ekA1dDRv5eD/vr7ABYbJgAAEy4zPjMjF0/z+0C2AAAAAElFTkSuQmCC
3	Twitter-logo.svg	Twitter-logo.svg	Twitter-logo.svg	248	204	\N	Twitter_logo_f118e40b65	.svg	image/svg+xml	0.73	/uploads/Twitter_logo_f118e40b65.svg	\N	local	\N	/	2022-09-28 20:27:13.579	2022-09-28 20:27:13.579	1	1	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nGNgEIhkEIsFkbzhDCAKjkACYGTz/z8AX4EGtNanP90AAAAASUVORK5CYII=
4	React-icon.svg	React-icon.svg	React-icon.svg	23	20	\N	React_icon_e9cfe5c6b3	.svg	image/svg+xml	0.37	/uploads/React_icon_e9cfe5c6b3.svg	\N	local	\N	/	2022-09-28 20:27:40.929	2022-09-28 20:27:40.929	1	1	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNgSGtN+P8/4f9/BudkBobFRxhalzJ0r2ZYfpwBhHffZth7l6FjBQOyMgBbYBeeIVdPbwAAAABJRU5ErkJggg==
5	Typescript_logo_2020.svg	Typescript_logo_2020.svg	Typescript_logo_2020.svg	512	512	\N	Typescript_logo_2020_5b26343d03	.svg	image/svg+xml	1.31	/uploads/Typescript_logo_2020_5b26343d03.svg	\N	local	\N	/	2022-09-28 20:29:17.448	2022-09-28 20:29:17.448	1	1	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nGNgYAtkYA8CIbZABgaBcAa7Fga1HBBiEAi/+v//jDP/AydfYmBgC1Sv2csQNN1/0kUAIwMPU4218SsAAAAASUVORK5CYII=
\.


--
-- Data for Name: files_folder_links; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.files_folder_links (id, file_id, folder_id) FROM stdin;
\.


--
-- Data for Name: files_related_morphs; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.files_related_morphs (id, file_id, related_id, related_type, field, "order") FROM stdin;
1	3	2	shared.meta-social	image	1
15	4	1	shared.seo	metaImage	1
36	2	1	dynamic.image	avatar	1
39	2	2	dynamic.image	avatar	1
58	3	3	shared.meta-social	image	1
59	1	2	shared.seo	metaImage	1
61	3	4	shared.meta-social	image	1
62	1	3	shared.seo	metaImage	1
64	2	2	dynamic.image	image	1
65	2	1	dynamic.image	image	1
\.


--
-- Data for Name: homes; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.homes (id, title, created_at, updated_at, published_at, created_by_id, updated_by_id) FROM stdin;
2	Welcome	2022-09-29 23:20:46.792	2022-10-16 19:19:23.245	2022-10-16 19:19:23.243	1	1
1	Welcome	2022-09-28 20:38:59.527	2022-10-16 19:30:51.789	2022-10-16 19:30:51.785	1	1
\.


--
-- Data for Name: homes_components; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.homes_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
41	2	3	shared.seo	seo	1
42	2	2	dynamic.image	dynamic	1
43	2	6	dynamic.text	dynamic	2
44	2	8	dynamic.text	tagLines	1
45	2	9	dynamic.text	tagLines	2
46	2	10	dynamic.text	tagLines	3
47	2	11	dynamic.text	tagLines	4
48	2	12	dynamic.text	tagLines	5
49	2	13	dynamic.text	tagLines	6
50	2	14	dynamic.text	tagLines	7
51	2	15	dynamic.text	tagLines	8
52	2	16	dynamic.text	tagLines	9
53	1	2	shared.seo	seo	1
54	1	1	dynamic.image	dynamic	1
55	1	7	dynamic.text	dynamic	2
56	1	17	dynamic.text	tagLines	1
57	1	18	dynamic.text	tagLines	2
58	1	19	dynamic.text	tagLines	3
59	1	20	dynamic.text	tagLines	4
60	1	21	dynamic.text	tagLines	5
61	1	22	dynamic.text	tagLines	6
62	1	23	dynamic.text	tagLines	7
63	1	24	dynamic.text	tagLines	8
64	1	25	dynamic.text	tagLines	9
\.


--
-- Data for Name: i18n_locale; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.i18n_locale (id, name, code, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	English (en)	en	2022-09-25 20:44:10.304	2022-09-25 20:44:10.304	\N	\N
\.


--
-- Data for Name: strapi_api_tokens; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.strapi_api_tokens (id, name, description, type, access_key, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
3	nextjs		read-only	a1031e11a6fd41744916d7307f4a7071cd00e2ba1b5ad29440f3abede773e29c1d350b0c760f1a7fe306135e3b5f813e2781e3a2cb70a79fdefbafe8d1147e0f	2022-10-09 15:22:49.627	2022-10-09 15:22:49.627	\N	\N
\.


--
-- Data for Name: strapi_core_store_settings; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.strapi_core_store_settings (id, key, value, type, environment, tag) FROM stdin;
9	plugin_content_manager_configuration_content_types::admin::permission	{"uid":"admin::permission","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"subject":{"edit":{"label":"subject","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subject","searchable":true,"sortable":true}},"properties":{"edit":{"label":"properties","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"properties","searchable":false,"sortable":false}},"conditions":{"edit":{"label":"conditions","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"conditions","searchable":false,"sortable":false}},"role":{"edit":{"label":"role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"role","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","subject","role"],"editRelations":["role"],"edit":[[{"name":"action","size":6},{"name":"subject","size":6}],[{"name":"properties","size":12}],[{"name":"conditions","size":12}]]}}	object	\N	\N
11	plugin_content_manager_configuration_content_types::admin::user	{"uid":"admin::user","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"firstname","defaultSortBy":"firstname","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"firstname":{"edit":{"label":"firstname","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"firstname","searchable":true,"sortable":true}},"lastname":{"edit":{"label":"lastname","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lastname","searchable":true,"sortable":true}},"username":{"edit":{"label":"username","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"username","searchable":true,"sortable":true}},"email":{"edit":{"label":"email","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"email","searchable":true,"sortable":true}},"password":{"edit":{"label":"password","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"password","searchable":true,"sortable":true}},"resetPasswordToken":{"edit":{"label":"resetPasswordToken","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"resetPasswordToken","searchable":true,"sortable":true}},"registrationToken":{"edit":{"label":"registrationToken","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"registrationToken","searchable":true,"sortable":true}},"isActive":{"edit":{"label":"isActive","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"isActive","searchable":true,"sortable":true}},"roles":{"edit":{"label":"roles","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"roles","searchable":false,"sortable":false}},"blocked":{"edit":{"label":"blocked","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"blocked","searchable":true,"sortable":true}},"preferedLanguage":{"edit":{"label":"preferedLanguage","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"preferedLanguage","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","firstname","lastname","username"],"editRelations":["roles"],"edit":[[{"name":"firstname","size":6},{"name":"lastname","size":6}],[{"name":"username","size":6},{"name":"email","size":6}],[{"name":"password","size":6},{"name":"resetPasswordToken","size":6}],[{"name":"registrationToken","size":6},{"name":"isActive","size":4}],[{"name":"blocked","size":4},{"name":"preferedLanguage","size":6}]]}}	object	\N	\N
10	plugin_content_manager_configuration_content_types::admin::role	{"uid":"admin::role","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"code":{"edit":{"label":"code","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"code","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"users":{"edit":{"label":"users","description":"","placeholder":"","visible":true,"editable":true,"mainField":"firstname"},"list":{"label":"users","searchable":false,"sortable":false}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","code","description"],"editRelations":["users","permissions"],"edit":[[{"name":"name","size":6},{"name":"code","size":6}],[{"name":"description","size":6}]]}}	object	\N	\N
17	plugin_content_manager_configuration_content_types::plugin::users-permissions.user	{"uid":"plugin::users-permissions.user","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"username","defaultSortBy":"username","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"username":{"edit":{"label":"username","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"username","searchable":true,"sortable":true}},"email":{"edit":{"label":"email","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"email","searchable":true,"sortable":true}},"provider":{"edit":{"label":"provider","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"provider","searchable":true,"sortable":true}},"password":{"edit":{"label":"password","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"password","searchable":true,"sortable":true}},"resetPasswordToken":{"edit":{"label":"resetPasswordToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"resetPasswordToken","searchable":true,"sortable":true}},"confirmationToken":{"edit":{"label":"confirmationToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"confirmationToken","searchable":true,"sortable":true}},"confirmed":{"edit":{"label":"confirmed","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"confirmed","searchable":true,"sortable":true}},"blocked":{"edit":{"label":"blocked","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"blocked","searchable":true,"sortable":true}},"role":{"edit":{"label":"role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"role","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","username","email","confirmed"],"editRelations":["role"],"edit":[[{"name":"username","size":6},{"name":"email","size":6}],[{"name":"password","size":6},{"name":"confirmed","size":4}],[{"name":"blocked","size":4}]]}}	object	\N	\N
23	plugin_content_manager_configuration_content_types::api::tag.tag	{"uid":"api::tag.tag","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"tag","defaultSortBy":"tag","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"tag":{"edit":{"label":"tag","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"tag","searchable":true,"sortable":true}},"articles":{"edit":{"label":"articles","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"articles","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","tag","articles","createdAt"],"editRelations":["articles"],"edit":[[{"name":"tag","size":6}]]}}	object	\N	\N
13	plugin_content_manager_configuration_content_types::plugin::upload.file	{"uid":"plugin::upload.file","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"alternativeText":{"edit":{"label":"alternativeText","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"alternativeText","searchable":true,"sortable":true}},"caption":{"edit":{"label":"caption","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"caption","searchable":true,"sortable":true}},"width":{"edit":{"label":"width","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"width","searchable":true,"sortable":true}},"height":{"edit":{"label":"height","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"height","searchable":true,"sortable":true}},"formats":{"edit":{"label":"formats","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"formats","searchable":false,"sortable":false}},"hash":{"edit":{"label":"hash","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"hash","searchable":true,"sortable":true}},"ext":{"edit":{"label":"ext","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"ext","searchable":true,"sortable":true}},"mime":{"edit":{"label":"mime","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"mime","searchable":true,"sortable":true}},"size":{"edit":{"label":"size","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"size","searchable":true,"sortable":true}},"url":{"edit":{"label":"url","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"url","searchable":true,"sortable":true}},"previewUrl":{"edit":{"label":"previewUrl","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"previewUrl","searchable":true,"sortable":true}},"provider":{"edit":{"label":"provider","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"provider","searchable":true,"sortable":true}},"provider_metadata":{"edit":{"label":"provider_metadata","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"provider_metadata","searchable":false,"sortable":false}},"folder":{"edit":{"label":"folder","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"folder","searchable":true,"sortable":true}},"folderPath":{"edit":{"label":"folderPath","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"folderPath","searchable":true,"sortable":true}},"placeholder":{"edit":{"label":"placeholder","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"placeholder","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","alternativeText","caption"],"editRelations":["folder"],"edit":[[{"name":"name","size":6},{"name":"alternativeText","size":6}],[{"name":"caption","size":6},{"name":"width","size":4}],[{"name":"height","size":4}],[{"name":"formats","size":12}],[{"name":"hash","size":6},{"name":"ext","size":6}],[{"name":"mime","size":6},{"name":"size","size":4}],[{"name":"url","size":6},{"name":"previewUrl","size":6}],[{"name":"provider","size":6}],[{"name":"provider_metadata","size":12}],[{"name":"folderPath","size":6},{"name":"placeholder","size":6}]]}}	object	\N	\N
1	strapi_content_types_schema	{"admin::permission":{"collectionName":"admin_permissions","info":{"name":"Permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"subject":{"type":"string","minLength":1,"configurable":false,"required":false},"properties":{"type":"json","configurable":false,"required":false,"default":{}},"conditions":{"type":"json","configurable":false,"required":false,"default":[]},"role":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::role"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"admin_permissions","info":{"name":"Permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"subject":{"type":"string","minLength":1,"configurable":false,"required":false},"properties":{"type":"json","configurable":false,"required":false,"default":{}},"conditions":{"type":"json","configurable":false,"required":false,"default":[]},"role":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::role"}},"kind":"collectionType"},"modelType":"contentType","modelName":"permission","connection":"default","uid":"admin::permission","plugin":"admin","globalId":"AdminPermission"},"admin::user":{"collectionName":"admin_users","info":{"name":"User","description":"","singularName":"user","pluralName":"users","displayName":"User"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"firstname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"lastname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"username":{"type":"string","unique":false,"configurable":false,"required":false},"email":{"type":"email","minLength":6,"configurable":false,"required":true,"unique":true,"private":true},"password":{"type":"password","minLength":6,"configurable":false,"required":false,"private":true},"resetPasswordToken":{"type":"string","configurable":false,"private":true},"registrationToken":{"type":"string","configurable":false,"private":true},"isActive":{"type":"boolean","default":false,"configurable":false,"private":true},"roles":{"configurable":false,"private":true,"type":"relation","relation":"manyToMany","inversedBy":"users","target":"admin::role","collectionName":"strapi_users_roles"},"blocked":{"type":"boolean","default":false,"configurable":false,"private":true},"preferedLanguage":{"type":"string","configurable":false,"required":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"admin_users","info":{"name":"User","description":"","singularName":"user","pluralName":"users","displayName":"User"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"firstname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"lastname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"username":{"type":"string","unique":false,"configurable":false,"required":false},"email":{"type":"email","minLength":6,"configurable":false,"required":true,"unique":true,"private":true},"password":{"type":"password","minLength":6,"configurable":false,"required":false,"private":true},"resetPasswordToken":{"type":"string","configurable":false,"private":true},"registrationToken":{"type":"string","configurable":false,"private":true},"isActive":{"type":"boolean","default":false,"configurable":false,"private":true},"roles":{"configurable":false,"private":true,"type":"relation","relation":"manyToMany","inversedBy":"users","target":"admin::role","collectionName":"strapi_users_roles"},"blocked":{"type":"boolean","default":false,"configurable":false,"private":true},"preferedLanguage":{"type":"string","configurable":false,"required":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"user","connection":"default","uid":"admin::user","plugin":"admin","globalId":"AdminUser"},"admin::role":{"collectionName":"admin_roles","info":{"name":"Role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"code":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"description":{"type":"string","configurable":false},"users":{"configurable":false,"type":"relation","relation":"manyToMany","mappedBy":"roles","target":"admin::user"},"permissions":{"configurable":false,"type":"relation","relation":"oneToMany","mappedBy":"role","target":"admin::permission"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"admin_roles","info":{"name":"Role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"code":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"description":{"type":"string","configurable":false},"users":{"configurable":false,"type":"relation","relation":"manyToMany","mappedBy":"roles","target":"admin::user"},"permissions":{"configurable":false,"type":"relation","relation":"oneToMany","mappedBy":"role","target":"admin::permission"}},"kind":"collectionType"},"modelType":"contentType","modelName":"role","connection":"default","uid":"admin::role","plugin":"admin","globalId":"AdminRole"},"admin::api-token":{"collectionName":"strapi_api_tokens","info":{"name":"Api Token","singularName":"api-token","pluralName":"api-tokens","displayName":"Api Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"type":{"type":"enumeration","enum":["read-only","full-access"],"configurable":false,"required":false,"default":"read-only"},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_api_tokens","info":{"name":"Api Token","singularName":"api-token","pluralName":"api-tokens","displayName":"Api Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"type":{"type":"enumeration","enum":["read-only","full-access"],"configurable":false,"required":false,"default":"read-only"},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true}},"kind":"collectionType"},"modelType":"contentType","modelName":"api-token","connection":"default","uid":"admin::api-token","plugin":"admin","globalId":"AdminApiToken"},"plugin::upload.file":{"collectionName":"files","info":{"singularName":"file","pluralName":"files","displayName":"File","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","configurable":false,"required":true},"alternativeText":{"type":"string","configurable":false},"caption":{"type":"string","configurable":false},"width":{"type":"integer","configurable":false},"height":{"type":"integer","configurable":false},"formats":{"type":"json","configurable":false},"hash":{"type":"string","configurable":false,"required":true},"ext":{"type":"string","configurable":false},"mime":{"type":"string","configurable":false,"required":true},"size":{"type":"decimal","configurable":false,"required":true},"url":{"type":"string","configurable":false,"required":true},"previewUrl":{"type":"string","configurable":false},"provider":{"type":"string","configurable":false,"required":true},"provider_metadata":{"type":"json","configurable":false},"related":{"type":"relation","relation":"morphToMany","configurable":false},"folder":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"files","private":true},"folderPath":{"type":"string","min":1,"required":true,"private":true},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"placeholder":{"type":"text"}},"indexes":[{"name":"upload_files_folder_path_index","columns":["folder_path"],"type":null}],"kind":"collectionType","__schema__":{"collectionName":"files","info":{"singularName":"file","pluralName":"files","displayName":"File","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","configurable":false,"required":true},"alternativeText":{"type":"string","configurable":false},"caption":{"type":"string","configurable":false},"width":{"type":"integer","configurable":false},"height":{"type":"integer","configurable":false},"formats":{"type":"json","configurable":false},"hash":{"type":"string","configurable":false,"required":true},"ext":{"type":"string","configurable":false},"mime":{"type":"string","configurable":false,"required":true},"size":{"type":"decimal","configurable":false,"required":true},"url":{"type":"string","configurable":false,"required":true},"previewUrl":{"type":"string","configurable":false},"provider":{"type":"string","configurable":false,"required":true},"provider_metadata":{"type":"json","configurable":false},"related":{"type":"relation","relation":"morphToMany","configurable":false},"folder":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"files","private":true},"folderPath":{"type":"string","min":1,"required":true,"private":true}},"kind":"collectionType"},"modelType":"contentType","modelName":"file","connection":"default","uid":"plugin::upload.file","plugin":"upload","globalId":"UploadFile"},"plugin::upload.folder":{"collectionName":"upload_folders","info":{"singularName":"folder","pluralName":"folders","displayName":"Folder"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"required":true},"pathId":{"type":"integer","unique":true,"required":true},"parent":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"children"},"children":{"type":"relation","relation":"oneToMany","target":"plugin::upload.folder","mappedBy":"parent"},"files":{"type":"relation","relation":"oneToMany","target":"plugin::upload.file","mappedBy":"folder"},"path":{"type":"string","min":1,"required":true},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"indexes":[{"name":"upload_folders_path_id_index","columns":["path_id"],"type":"unique"},{"name":"upload_folders_path_index","columns":["path"],"type":"unique"}],"kind":"collectionType","__schema__":{"collectionName":"upload_folders","info":{"singularName":"folder","pluralName":"folders","displayName":"Folder"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"required":true},"pathId":{"type":"integer","unique":true,"required":true},"parent":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"children"},"children":{"type":"relation","relation":"oneToMany","target":"plugin::upload.folder","mappedBy":"parent"},"files":{"type":"relation","relation":"oneToMany","target":"plugin::upload.file","mappedBy":"folder"},"path":{"type":"string","min":1,"required":true}},"kind":"collectionType"},"modelType":"contentType","modelName":"folder","connection":"default","uid":"plugin::upload.folder","plugin":"upload","globalId":"UploadFolder"},"plugin::i18n.locale":{"info":{"singularName":"locale","pluralName":"locales","collectionName":"locales","displayName":"Locale","description":""},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"max":50,"configurable":false},"code":{"type":"string","unique":true,"configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"info":{"singularName":"locale","pluralName":"locales","collectionName":"locales","displayName":"Locale","description":""},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"max":50,"configurable":false},"code":{"type":"string","unique":true,"configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"locale","connection":"default","uid":"plugin::i18n.locale","plugin":"i18n","collectionName":"i18n_locale","globalId":"I18NLocale"},"plugin::users-permissions.permission":{"collectionName":"up_permissions","info":{"name":"permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","required":true,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"permissions","configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"up_permissions","info":{"name":"permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","required":true,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"permissions","configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"permission","connection":"default","uid":"plugin::users-permissions.permission","plugin":"users-permissions","globalId":"UsersPermissionsPermission"},"plugin::users-permissions.role":{"collectionName":"up_roles","info":{"name":"role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":3,"required":true,"configurable":false},"description":{"type":"string","configurable":false},"type":{"type":"string","unique":true,"configurable":false},"permissions":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.permission","mappedBy":"role","configurable":false},"users":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.user","mappedBy":"role","configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"up_roles","info":{"name":"role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":3,"required":true,"configurable":false},"description":{"type":"string","configurable":false},"type":{"type":"string","unique":true,"configurable":false},"permissions":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.permission","mappedBy":"role","configurable":false},"users":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.user","mappedBy":"role","configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"role","connection":"default","uid":"plugin::users-permissions.role","plugin":"users-permissions","globalId":"UsersPermissionsRole"},"plugin::users-permissions.user":{"collectionName":"up_users","info":{"name":"user","description":"","singularName":"user","pluralName":"users","displayName":"User"},"options":{"draftAndPublish":false,"timestamps":true},"attributes":{"username":{"type":"string","minLength":3,"unique":true,"configurable":false,"required":true},"email":{"type":"email","minLength":6,"configurable":false,"required":true},"provider":{"type":"string","configurable":false},"password":{"type":"password","minLength":6,"configurable":false,"private":true},"resetPasswordToken":{"type":"string","configurable":false,"private":true},"confirmationToken":{"type":"string","configurable":false,"private":true},"confirmed":{"type":"boolean","default":false,"configurable":false},"blocked":{"type":"boolean","default":false,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"users","configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"config":{"attributes":{"resetPasswordToken":{"hidden":true},"confirmationToken":{"hidden":true},"provider":{"hidden":true}}},"kind":"collectionType","__schema__":{"collectionName":"up_users","info":{"name":"user","description":"","singularName":"user","pluralName":"users","displayName":"User"},"options":{"draftAndPublish":false,"timestamps":true},"attributes":{"username":{"type":"string","minLength":3,"unique":true,"configurable":false,"required":true},"email":{"type":"email","minLength":6,"configurable":false,"required":true},"provider":{"type":"string","configurable":false},"password":{"type":"password","minLength":6,"configurable":false,"private":true},"resetPasswordToken":{"type":"string","configurable":false,"private":true},"confirmationToken":{"type":"string","configurable":false,"private":true},"confirmed":{"type":"boolean","default":false,"configurable":false},"blocked":{"type":"boolean","default":false,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"users","configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"user","connection":"default","uid":"plugin::users-permissions.user","plugin":"users-permissions","globalId":"UsersPermissionsUser"},"api::about.about":{"kind":"singleType","collectionName":"abouts","info":{"singularName":"about","pluralName":"abouts","displayName":"About","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"Title":{"type":"string"},"dynamic":{"type":"dynamiczone","components":["dynamic.image","dynamic.rich-text","dynamic.slideshow","dynamic.section-title","dynamic.text"]},"seo":{"type":"component","repeatable":false,"component":"shared.seo"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"abouts","info":{"singularName":"about","pluralName":"abouts","displayName":"About","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"Title":{"type":"string"},"dynamic":{"type":"dynamiczone","components":["dynamic.image","dynamic.rich-text","dynamic.slideshow","dynamic.section-title","dynamic.text"]},"seo":{"type":"component","repeatable":false,"component":"shared.seo"}},"kind":"singleType"},"modelType":"contentType","modelName":"about","connection":"default","uid":"api::about.about","apiName":"about","globalId":"About","actions":{},"lifecycles":{}},"api::article.article":{"kind":"collectionType","collectionName":"articles","info":{"singularName":"article","pluralName":"articles","displayName":"Article","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"title":{"type":"string"},"seo":{"type":"component","repeatable":false,"component":"shared.seo"},"dynamic":{"type":"dynamiczone","components":["dynamic.image","dynamic.rich-text","dynamic.slideshow","dynamic.text","dynamic.section-title"]},"tags":{"type":"relation","relation":"manyToMany","target":"api::tag.tag","inversedBy":"articles"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"articles","info":{"singularName":"article","pluralName":"articles","displayName":"Article","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"title":{"type":"string"},"seo":{"type":"component","repeatable":false,"component":"shared.seo"},"dynamic":{"type":"dynamiczone","components":["dynamic.image","dynamic.rich-text","dynamic.slideshow","dynamic.text","dynamic.section-title"]},"tags":{"type":"relation","relation":"manyToMany","target":"api::tag.tag","inversedBy":"articles"}},"kind":"collectionType"},"modelType":"contentType","modelName":"article","connection":"default","uid":"api::article.article","apiName":"article","globalId":"Article","actions":{},"lifecycles":{}},"api::contact.contact":{"kind":"singleType","collectionName":"contacts","info":{"singularName":"contact","pluralName":"contacts","displayName":"Contact"},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"title":{"type":"string"},"dynamic":{"type":"dynamiczone","components":["dynamic.image","dynamic.rich-text","dynamic.slideshow"]},"seo":{"type":"component","repeatable":false,"component":"shared.seo"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"contacts","info":{"singularName":"contact","pluralName":"contacts","displayName":"Contact"},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"title":{"type":"string"},"dynamic":{"type":"dynamiczone","components":["dynamic.image","dynamic.rich-text","dynamic.slideshow"]},"seo":{"type":"component","repeatable":false,"component":"shared.seo"}},"kind":"singleType"},"modelType":"contentType","modelName":"contact","connection":"default","uid":"api::contact.contact","apiName":"contact","globalId":"Contact","actions":{},"lifecycles":{}},"api::home.home":{"kind":"singleType","collectionName":"homes","info":{"singularName":"home","pluralName":"homes","displayName":"Home","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"versions":{"versioned":true}},"attributes":{"title":{"pluginOptions":{"versions":{"versioned":true}},"type":"string"},"seo":{"type":"component","repeatable":false,"pluginOptions":{"versions":{"versioned":true}},"component":"shared.seo"},"dynamic":{"pluginOptions":{"versions":{"versioned":true}},"type":"dynamiczone","components":["dynamic.image","dynamic.rich-text","dynamic.section-title","dynamic.slideshow","dynamic.text"]},"tagLines":{"pluginOptions":{"versions":{"versioned":true}},"type":"dynamiczone","components":["dynamic.text"]},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"homes","info":{"singularName":"home","pluralName":"homes","displayName":"Home","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"versions":{"versioned":true}},"attributes":{"title":{"pluginOptions":{"versions":{"versioned":true}},"type":"string"},"seo":{"type":"component","repeatable":false,"pluginOptions":{"versions":{"versioned":true}},"component":"shared.seo"},"dynamic":{"pluginOptions":{"versions":{"versioned":true}},"type":"dynamiczone","components":["dynamic.image","dynamic.rich-text","dynamic.section-title","dynamic.slideshow","dynamic.text"]},"tagLines":{"pluginOptions":{"versions":{"versioned":true}},"type":"dynamiczone","components":["dynamic.text"]}},"kind":"singleType"},"modelType":"contentType","modelName":"home","connection":"default","uid":"api::home.home","apiName":"home","globalId":"Home","actions":{},"lifecycles":{}},"api::tag.tag":{"kind":"collectionType","collectionName":"tags","info":{"singularName":"tag","pluralName":"tags","displayName":"Tag"},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"tag":{"type":"string"},"articles":{"type":"relation","relation":"manyToMany","target":"api::article.article","mappedBy":"tags"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"tags","info":{"singularName":"tag","pluralName":"tags","displayName":"Tag"},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"tag":{"type":"string"},"articles":{"type":"relation","relation":"manyToMany","target":"api::article.article","mappedBy":"tags"}},"kind":"collectionType"},"modelType":"contentType","modelName":"tag","connection":"default","uid":"api::tag.tag","apiName":"tag","globalId":"Tag","actions":{},"lifecycles":{}}}	object	\N	\N
31	core_admin_auth	{"providers":{"autoRegister":false,"defaultRole":null}}	object	\N	\N
19	plugin_content_manager_configuration_content_types::api::article.article	{"uid":"api::article.article","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"seo":{"edit":{"label":"seo","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"seo","searchable":false,"sortable":false}},"dynamic":{"edit":{"label":"dynamic","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"dynamic","searchable":false,"sortable":false}},"tags":{"edit":{"label":"tags","description":"","placeholder":"","visible":true,"editable":true,"mainField":"tag"},"list":{"label":"tags","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","seo","tags"],"editRelations":["tags"],"edit":[[{"name":"title","size":6}],[{"name":"seo","size":12}],[{"name":"dynamic","size":12}]]}}	object	\N	\N
14	plugin_content_manager_configuration_content_types::plugin::i18n.locale	{"uid":"plugin::i18n.locale","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"code":{"edit":{"label":"code","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"code","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","code","createdAt"],"editRelations":[],"edit":[[{"name":"name","size":6},{"name":"code","size":6}]]}}	object	\N	\N
20	plugin_content_manager_configuration_content_types::plugin::upload.folder	{"uid":"plugin::upload.folder","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"pathId":{"edit":{"label":"pathId","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"pathId","searchable":true,"sortable":true}},"parent":{"edit":{"label":"parent","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"parent","searchable":true,"sortable":true}},"children":{"edit":{"label":"children","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"children","searchable":false,"sortable":false}},"files":{"edit":{"label":"files","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"files","searchable":false,"sortable":false}},"path":{"edit":{"label":"path","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"path","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","pathId","parent"],"editRelations":["parent","children","files"],"edit":[[{"name":"name","size":6},{"name":"pathId","size":4}],[{"name":"path","size":6}]]}}	object	\N	\N
15	plugin_content_manager_configuration_content_types::plugin::users-permissions.permission	{"uid":"plugin::users-permissions.permission","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"role":{"edit":{"label":"role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"role","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","role","createdAt"],"editRelations":["role"],"edit":[[{"name":"action","size":6}]]}}	object	\N	\N
21	plugin_content_manager_configuration_content_types::api::contact.contact	{"uid":"api::contact.contact","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"dynamic":{"edit":{"label":"dynamic","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"dynamic","searchable":false,"sortable":false}},"seo":{"edit":{"label":"seo","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"seo","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","seo","createdAt"],"editRelations":[],"edit":[[{"name":"title","size":6}],[{"name":"dynamic","size":12}],[{"name":"seo","size":12}]]}}	object	\N	\N
16	plugin_content_manager_configuration_content_types::plugin::users-permissions.role	{"uid":"plugin::users-permissions.role","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"users":{"edit":{"label":"users","description":"","placeholder":"","visible":true,"editable":true,"mainField":"username"},"list":{"label":"users","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","description","type"],"editRelations":["permissions","users"],"edit":[[{"name":"name","size":6},{"name":"description","size":6}],[{"name":"type","size":6}]]}}	object	\N	\N
18	plugin_content_manager_configuration_content_types::api::about.about	{"uid":"api::about.about","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"Title","defaultSortBy":"Title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"Title":{"edit":{"label":"Title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"Title","searchable":true,"sortable":true}},"dynamic":{"edit":{"label":"dynamic","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"dynamic","searchable":false,"sortable":false}},"seo":{"edit":{"label":"seo","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"seo","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","Title","seo","createdAt"],"editRelations":[],"edit":[[{"name":"Title","size":6}],[{"name":"dynamic","size":12}],[{"name":"seo","size":12}]]}}	object	\N	\N
24	plugin_upload_settings	{"sizeOptimization":true,"responsiveDimensions":true,"autoOrientation":false}	object	\N	\N
26	plugin_documentation_config	{"restrictedAccess":false}	object	\N	\N
27	plugin_i18n_default_locale	"en"	string	\N	\N
28	plugin_users-permissions_grant	{"email":{"enabled":true,"icon":"envelope"},"discord":{"enabled":false,"icon":"discord","key":"","secret":"","callback":"api/auth/discord/callback","scope":["identify","email"]},"facebook":{"enabled":false,"icon":"facebook-square","key":"","secret":"","callback":"api/auth/facebook/callback","scope":["email"]},"google":{"enabled":false,"icon":"google","key":"","secret":"","callback":"api/auth/google/callback","scope":["email"]},"github":{"enabled":false,"icon":"github","key":"","secret":"","callback":"api/auth/github/callback","scope":["user","user:email"]},"microsoft":{"enabled":false,"icon":"windows","key":"","secret":"","callback":"api/auth/microsoft/callback","scope":["user.read"]},"twitter":{"enabled":false,"icon":"twitter","key":"","secret":"","callback":"api/auth/twitter/callback"},"instagram":{"enabled":false,"icon":"instagram","key":"","secret":"","callback":"api/auth/instagram/callback","scope":["user_profile"]},"vk":{"enabled":false,"icon":"vk","key":"","secret":"","callback":"api/auth/vk/callback","scope":["email"]},"twitch":{"enabled":false,"icon":"twitch","key":"","secret":"","callback":"api/auth/twitch/callback","scope":["user:read:email"]},"linkedin":{"enabled":false,"icon":"linkedin","key":"","secret":"","callback":"api/auth/linkedin/callback","scope":["r_liteprofile","r_emailaddress"]},"cognito":{"enabled":false,"icon":"aws","key":"","secret":"","subdomain":"my.subdomain.com","callback":"api/auth/cognito/callback","scope":["email","openid","profile"]},"reddit":{"enabled":false,"icon":"reddit","key":"","secret":"","state":true,"callback":"api/auth/reddit/callback","scope":["identity"]},"auth0":{"enabled":false,"icon":"","key":"","secret":"","subdomain":"my-tenant.eu","callback":"api/auth/auth0/callback","scope":["openid","email","profile"]},"cas":{"enabled":false,"icon":"book","key":"","secret":"","callback":"api/auth/cas/callback","scope":["openid email"],"subdomain":"my.subdomain.com/cas"}}	object	\N	\N
29	plugin_users-permissions_email	{"reset_password":{"display":"Email.template.reset_password","icon":"sync","options":{"from":{"name":"Administration Panel","email":"no-reply@strapi.io"},"response_email":"","object":"Reset password","message":"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>"}},"email_confirmation":{"display":"Email.template.email_confirmation","icon":"check-square","options":{"from":{"name":"Administration Panel","email":"no-reply@strapi.io"},"response_email":"","object":"Account confirmation","message":"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>"}}}	object	\N	\N
30	plugin_users-permissions_advanced	{"unique_email":true,"allow_register":true,"email_confirmation":false,"email_reset_password":null,"email_confirmation_redirection":null,"default_role":"authenticated"}	object	\N	\N
5	plugin_content_manager_configuration_components::dynamic.slideshow	{"uid":"dynamic.slideshow","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"slideShow":{"edit":{"label":"slideShow","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"slideShow","searchable":false,"sortable":false}}},"layouts":{"list":["id","slideShow"],"edit":[[{"name":"slideShow","size":6}]],"editRelations":[]},"isComponent":true}	object	\N	\N
4	plugin_content_manager_configuration_components::dynamic.rich-text	{"uid":"dynamic.rich-text","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"richText":{"edit":{"label":"richText","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"richText","searchable":false,"sortable":false}}},"layouts":{"list":["id"],"edit":[[{"name":"richText","size":12}]],"editRelations":[]},"isComponent":true}	object	\N	\N
3	plugin_content_manager_configuration_components::dynamic.section-title	{"uid":"dynamic.section-title","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"chapterTitle","defaultSortBy":"chapterTitle","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"chapterTitle":{"edit":{"label":"chapterTitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"chapterTitle","searchable":true,"sortable":true}},"chapterNumber":{"edit":{"label":"chapterNumber","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"chapterNumber","searchable":true,"sortable":true}}},"layouts":{"list":["id","chapterTitle","chapterNumber"],"edit":[[{"name":"chapterTitle","size":6},{"name":"chapterNumber","size":4}]],"editRelations":[]},"isComponent":true}	object	\N	\N
32	core_admin_project-settings	{"menuLogo":{"name":"apple-touch-icon.png","hash":"apple_touch_icon_85d49f738f","url":"/uploads/apple_touch_icon_85d49f738f.png","width":180,"height":180,"ext":".png","size":7.95,"provider":"local"}}	object	\N	\N
6	plugin_content_manager_configuration_components::dynamic.text	{"uid":"dynamic.text","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"text":{"edit":{"label":"text","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"text","searchable":true,"sortable":true}}},"layouts":{"list":["id","text"],"edit":[[{"name":"text","size":6}]],"editRelations":[]},"isComponent":true}	object	\N	\N
2	plugin_content_manager_configuration_components::dynamic.image	{"uid":"dynamic.image","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"image":{"edit":{"label":"image","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"image","searchable":false,"sortable":false}}},"layouts":{"list":["id","image"],"edit":[[{"name":"image","size":6}]],"editRelations":[]},"isComponent":true}	object	\N	\N
12	plugin_content_manager_configuration_content_types::admin::api-token	{"uid":"admin::api-token","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"accessKey":{"edit":{"label":"accessKey","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"accessKey","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","description","type"],"edit":[[{"name":"name","size":6},{"name":"description","size":6}],[{"name":"type","size":6},{"name":"accessKey","size":6}]],"editRelations":[]}}	object	\N	\N
8	plugin_content_manager_configuration_components::shared.seo	{"uid":"shared.seo","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"metaTitle","defaultSortBy":"metaTitle","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"metaTitle":{"edit":{"label":"metaTitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"metaTitle","searchable":true,"sortable":true}},"metaDescription":{"edit":{"label":"metaDescription","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"metaDescription","searchable":true,"sortable":true}},"keywords":{"edit":{"label":"keywords","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"keywords","searchable":true,"sortable":true}},"metaRobots":{"edit":{"label":"metaRobots","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"metaRobots","searchable":true,"sortable":true}},"metaViewport":{"edit":{"label":"metaViewport","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"metaViewport","searchable":true,"sortable":true}},"canonicalURL":{"edit":{"label":"canonicalURL","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"canonicalURL","searchable":true,"sortable":true}}},"layouts":{"list":["id","metaTitle","metaDescription"],"edit":[[{"name":"metaTitle","size":6},{"name":"metaDescription","size":6}],[{"name":"keywords","size":6},{"name":"metaRobots","size":6}],[{"name":"metaViewport","size":6},{"name":"canonicalURL","size":6}]],"editRelations":[]},"isComponent":true}	object	\N	\N
25	plugin_upload_metrics	{"weeklySchedule":"1 15 19 * * 0","lastWeeklyUpdate":1665940501011}	object	\N	\N
22	plugin_content_manager_configuration_content_types::api::home.home	{"uid":"api::home.home","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"seo":{"edit":{"label":"seo","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"seo","searchable":false,"sortable":false}},"dynamic":{"edit":{"label":"dynamic","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"dynamic","searchable":false,"sortable":false}},"tagLines":{"edit":{"label":"tagLines","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"tagLines","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","seo","createdAt"],"edit":[[{"name":"title","size":6}],[{"name":"dynamic","size":12}],[{"name":"seo","size":12}],[{"name":"tagLines","size":12}]],"editRelations":[]}}	object	\N	\N
\.


--
-- Data for Name: strapi_database_schema; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.strapi_database_schema (id, schema, "time", hash) FROM stdin;
8	{"tables":[{"name":"strapi_core_store_settings","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"key","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"value","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"environment","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"tag","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"strapi_webhooks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"url","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"headers","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"events","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"enabled","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"admin_permissions","indexes":[{"name":"admin_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"admin_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"admin_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"admin_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subject","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"properties","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"conditions","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"admin_users","indexes":[{"name":"admin_users_created_by_id_fk","columns":["created_by_id"]},{"name":"admin_users_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"admin_users_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"admin_users_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"firstname","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"lastname","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"username","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"email","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"password","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"reset_password_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"registration_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"is_active","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"blocked","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"prefered_language","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"admin_roles","indexes":[{"name":"admin_roles_created_by_id_fk","columns":["created_by_id"]},{"name":"admin_roles_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"admin_roles_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"admin_roles_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"code","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_api_tokens","indexes":[{"name":"strapi_api_tokens_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_api_tokens_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_api_tokens_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_api_tokens_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"access_key","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"files","indexes":[{"name":"upload_files_folder_path_index","columns":["folder_path"],"type":null},{"name":"files_created_by_id_fk","columns":["created_by_id"]},{"name":"files_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"files_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"files_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"alternative_text","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"caption","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"width","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"height","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"formats","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"hash","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"ext","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"mime","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"size","type":"decimal","args":[10,2],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"url","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"preview_url","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider_metadata","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"folder_path","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"placeholder","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"upload_folders","indexes":[{"name":"upload_folders_path_id_index","columns":["path_id"],"type":"unique"},{"name":"upload_folders_path_index","columns":["path"],"type":"unique"},{"name":"upload_folders_created_by_id_fk","columns":["created_by_id"]},{"name":"upload_folders_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"upload_folders_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"upload_folders_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"path_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"path","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"i18n_locale","indexes":[{"name":"i18n_locale_created_by_id_fk","columns":["created_by_id"]},{"name":"i18n_locale_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"i18n_locale_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"i18n_locale_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"code","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_permissions","indexes":[{"name":"up_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"up_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"up_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"up_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_roles","indexes":[{"name":"up_roles_created_by_id_fk","columns":["created_by_id"]},{"name":"up_roles_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"up_roles_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"up_roles_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_users","indexes":[{"name":"up_users_created_by_id_fk","columns":["created_by_id"]},{"name":"up_users_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"up_users_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"up_users_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"username","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"email","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"password","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"reset_password_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"confirmation_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"confirmed","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"blocked","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"abouts","indexes":[{"name":"abouts_created_by_id_fk","columns":["created_by_id"]},{"name":"abouts_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"abouts_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"abouts_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"articles","indexes":[{"name":"articles_created_by_id_fk","columns":["created_by_id"]},{"name":"articles_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"articles_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"articles_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"contacts","indexes":[{"name":"contacts_created_by_id_fk","columns":["created_by_id"]},{"name":"contacts_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"contacts_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"contacts_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"homes","indexes":[{"name":"homes_created_by_id_fk","columns":["created_by_id"]},{"name":"homes_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"homes_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"homes_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"tags","indexes":[{"name":"tags_created_by_id_fk","columns":["created_by_id"]},{"name":"tags_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"tags_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"tags_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"tag","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_dynamic_images","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false}]},{"name":"components_dynamic_rich_texts","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"rich_text","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_dynamic_section_titles","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"chapter_title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"chapter_number","type":"decimal","args":[10,2],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_dynamic_slideshows","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false}]},{"name":"components_dynamic_texts","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"text","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_shared_seos","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"meta_title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"meta_description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"keywords","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"meta_robots","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"meta_viewport","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"canonical_url","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"admin_permissions_role_links","indexes":[{"name":"admin_permissions_role_links_fk","columns":["permission_id"]},{"name":"admin_permissions_role_links_inv_fk","columns":["role_id"]}],"foreignKeys":[{"name":"admin_permissions_role_links_fk","columns":["permission_id"],"referencedColumns":["id"],"referencedTable":"admin_permissions","onDelete":"CASCADE"},{"name":"admin_permissions_role_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"admin_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"admin_users_roles_links","indexes":[{"name":"admin_users_roles_links_fk","columns":["user_id"]},{"name":"admin_users_roles_links_inv_fk","columns":["role_id"]}],"foreignKeys":[{"name":"admin_users_roles_links_fk","columns":["user_id"],"referencedColumns":["id"],"referencedTable":"admin_users","onDelete":"CASCADE"},{"name":"admin_users_roles_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"admin_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"user_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"files_related_morphs","indexes":[{"name":"files_related_morphs_fk","columns":["file_id"]}],"foreignKeys":[{"name":"files_related_morphs_fk","columns":["file_id"],"referencedColumns":["id"],"referencedTable":"files","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"file_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"related_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"related_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"files_folder_links","indexes":[{"name":"files_folder_links_fk","columns":["file_id"]},{"name":"files_folder_links_inv_fk","columns":["folder_id"]}],"foreignKeys":[{"name":"files_folder_links_fk","columns":["file_id"],"referencedColumns":["id"],"referencedTable":"files","onDelete":"CASCADE"},{"name":"files_folder_links_inv_fk","columns":["folder_id"],"referencedColumns":["id"],"referencedTable":"upload_folders","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"file_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"folder_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"upload_folders_parent_links","indexes":[{"name":"upload_folders_parent_links_fk","columns":["folder_id"]},{"name":"upload_folders_parent_links_inv_fk","columns":["inv_folder_id"]}],"foreignKeys":[{"name":"upload_folders_parent_links_fk","columns":["folder_id"],"referencedColumns":["id"],"referencedTable":"upload_folders","onDelete":"CASCADE"},{"name":"upload_folders_parent_links_inv_fk","columns":["inv_folder_id"],"referencedColumns":["id"],"referencedTable":"upload_folders","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"folder_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_folder_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_permissions_role_links","indexes":[{"name":"up_permissions_role_links_fk","columns":["permission_id"]},{"name":"up_permissions_role_links_inv_fk","columns":["role_id"]}],"foreignKeys":[{"name":"up_permissions_role_links_fk","columns":["permission_id"],"referencedColumns":["id"],"referencedTable":"up_permissions","onDelete":"CASCADE"},{"name":"up_permissions_role_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"up_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_users_role_links","indexes":[{"name":"up_users_role_links_fk","columns":["user_id"]},{"name":"up_users_role_links_inv_fk","columns":["role_id"]}],"foreignKeys":[{"name":"up_users_role_links_fk","columns":["user_id"],"referencedColumns":["id"],"referencedTable":"up_users","onDelete":"CASCADE"},{"name":"up_users_role_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"up_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"user_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"abouts_components","indexes":[{"name":"abouts_field_index","columns":["field"],"type":null},{"name":"abouts_component_type_index","columns":["component_type"],"type":null},{"name":"abouts_entity_fk","columns":["entity_id"]}],"foreignKeys":[{"name":"abouts_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"abouts","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"integer","args":[],"defaultTo":0,"notNullable":false,"unsigned":true}]},{"name":"articles_components","indexes":[{"name":"articles_field_index","columns":["field"],"type":null},{"name":"articles_component_type_index","columns":["component_type"],"type":null},{"name":"articles_entity_fk","columns":["entity_id"]}],"foreignKeys":[{"name":"articles_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"articles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"integer","args":[],"defaultTo":0,"notNullable":false,"unsigned":true}]},{"name":"articles_tags_links","indexes":[{"name":"articles_tags_links_fk","columns":["article_id"]},{"name":"articles_tags_links_inv_fk","columns":["tag_id"]}],"foreignKeys":[{"name":"articles_tags_links_fk","columns":["article_id"],"referencedColumns":["id"],"referencedTable":"articles","onDelete":"CASCADE"},{"name":"articles_tags_links_inv_fk","columns":["tag_id"],"referencedColumns":["id"],"referencedTable":"tags","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"article_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"tag_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"contacts_components","indexes":[{"name":"contacts_field_index","columns":["field"],"type":null},{"name":"contacts_component_type_index","columns":["component_type"],"type":null},{"name":"contacts_entity_fk","columns":["entity_id"]}],"foreignKeys":[{"name":"contacts_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"contacts","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"integer","args":[],"defaultTo":0,"notNullable":false,"unsigned":true}]},{"name":"homes_components","indexes":[{"name":"homes_field_index","columns":["field"],"type":null},{"name":"homes_component_type_index","columns":["component_type"],"type":null},{"name":"homes_entity_fk","columns":["entity_id"]}],"foreignKeys":[{"name":"homes_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"homes","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"integer","args":[],"defaultTo":0,"notNullable":false,"unsigned":true}]}]}	2022-10-16 19:30:41.44	b3fcabdd1b16f4ae8fc15d5b5ba68e3b
\.


--
-- Data for Name: strapi_migrations; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.strapi_migrations (id, name, "time") FROM stdin;
\.


--
-- Data for Name: strapi_webhooks; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.strapi_webhooks (id, name, url, headers, events, enabled) FROM stdin;
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.tags (id, tag, created_at, updated_at, published_at, created_by_id, updated_by_id) FROM stdin;
1	react	2022-09-25 16:21:32.153	2022-09-29 22:44:14.629	2022-09-29 22:44:14.628	1	1
2	typescript	2022-09-25 16:21:48.003	2022-09-29 22:44:20.395	2022-09-29 22:44:20.393	\N	1
\.


--
-- Data for Name: up_permissions; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.up_permissions (id, action, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	plugin::users-permissions.user.me	2022-09-25 20:44:10.339	2022-09-25 20:44:10.339	\N	\N
2	plugin::users-permissions.auth.changePassword	2022-09-25 20:44:10.339	2022-09-25 20:44:10.339	\N	\N
3	plugin::users-permissions.auth.callback	2022-09-25 20:44:10.345	2022-09-25 20:44:10.345	\N	\N
4	plugin::users-permissions.auth.connect	2022-09-25 20:44:10.345	2022-09-25 20:44:10.345	\N	\N
5	plugin::users-permissions.auth.forgotPassword	2022-09-25 20:44:10.345	2022-09-25 20:44:10.345	\N	\N
6	plugin::users-permissions.auth.resetPassword	2022-09-25 20:44:10.345	2022-09-25 20:44:10.345	\N	\N
7	plugin::users-permissions.auth.register	2022-09-25 20:44:10.345	2022-09-25 20:44:10.345	\N	\N
8	plugin::users-permissions.auth.emailConfirmation	2022-09-25 20:44:10.345	2022-09-25 20:44:10.345	\N	\N
9	plugin::users-permissions.auth.sendEmailConfirmation	2022-09-25 20:44:10.345	2022-09-25 20:44:10.345	\N	\N
\.


--
-- Data for Name: up_permissions_role_links; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.up_permissions_role_links (id, permission_id, role_id) FROM stdin;
1	1	1
2	2	1
3	3	2
4	5	2
5	4	2
6	7	2
7	6	2
8	8	2
9	9	2
\.


--
-- Data for Name: up_roles; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.up_roles (id, name, description, type, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	Authenticated	Default role given to authenticated user.	authenticated	2022-09-25 20:44:10.334	2022-09-25 20:44:10.334	\N	\N
2	Public	Default role given to unauthenticated user.	public	2022-09-25 20:44:10.336	2022-09-25 20:44:10.336	\N	\N
\.


--
-- Data for Name: up_users; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.up_users (id, username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: up_users_role_links; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.up_users_role_links (id, user_id, role_id) FROM stdin;
\.


--
-- Data for Name: upload_folders; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.upload_folders (id, name, path_id, path, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: upload_folders_parent_links; Type: TABLE DATA; Schema: public; Owner: db-strapi-admin
--

COPY public.upload_folders_parent_links (id, folder_id, inv_folder_id) FROM stdin;
\.


--
-- Name: abouts_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.abouts_components_id_seq', 1, false);


--
-- Name: abouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.abouts_id_seq', 1, false);


--
-- Name: admin_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.admin_permissions_id_seq', 153, true);


--
-- Name: admin_permissions_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.admin_permissions_role_links_id_seq', 153, true);


--
-- Name: admin_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.admin_roles_id_seq', 3, true);


--
-- Name: admin_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.admin_users_id_seq', 1, true);


--
-- Name: admin_users_roles_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.admin_users_roles_links_id_seq', 1, true);


--
-- Name: articles_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.articles_components_id_seq', 136, true);


--
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.articles_id_seq', 1, false);


--
-- Name: articles_tags_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.articles_tags_links_id_seq', 14, true);


--
-- Name: components_dynamic_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.components_dynamic_images_id_seq', 2, true);


--
-- Name: components_dynamic_rich_texts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.components_dynamic_rich_texts_id_seq', 1, false);


--
-- Name: components_dynamic_section_titles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.components_dynamic_section_titles_id_seq', 1, false);


--
-- Name: components_dynamic_slideshows_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.components_dynamic_slideshows_id_seq', 1, false);


--
-- Name: components_dynamic_texts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.components_dynamic_texts_id_seq', 25, true);


--
-- Name: components_shared_seos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.components_shared_seos_id_seq', 3, true);


--
-- Name: contacts_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.contacts_components_id_seq', 1, false);


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, false);


--
-- Name: files_folder_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.files_folder_links_id_seq', 1, false);


--
-- Name: files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.files_id_seq', 5, true);


--
-- Name: files_related_morphs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.files_related_morphs_id_seq', 65, true);


--
-- Name: homes_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.homes_components_id_seq', 64, true);


--
-- Name: homes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.homes_id_seq', 2, true);


--
-- Name: i18n_locale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.i18n_locale_id_seq', 1, true);


--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.strapi_api_tokens_id_seq', 3, true);


--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.strapi_core_store_settings_id_seq', 33, true);


--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.strapi_database_schema_id_seq', 8, true);


--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.strapi_migrations_id_seq', 1, false);


--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.strapi_webhooks_id_seq', 1, false);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.tags_id_seq', 1, false);


--
-- Name: up_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.up_permissions_id_seq', 9, true);


--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.up_permissions_role_links_id_seq', 9, true);


--
-- Name: up_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.up_roles_id_seq', 2, true);


--
-- Name: up_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.up_users_id_seq', 1, false);


--
-- Name: up_users_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.up_users_role_links_id_seq', 1, false);


--
-- Name: upload_folders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.upload_folders_id_seq', 1, false);


--
-- Name: upload_folders_parent_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-strapi-admin
--

SELECT pg_catalog.setval('public.upload_folders_parent_links_id_seq', 1, false);


--
-- Name: abouts_components abouts_components_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.abouts_components
    ADD CONSTRAINT abouts_components_pkey PRIMARY KEY (id);


--
-- Name: abouts abouts_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.abouts
    ADD CONSTRAINT abouts_pkey PRIMARY KEY (id);


--
-- Name: admin_permissions admin_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_permissions
    ADD CONSTRAINT admin_permissions_pkey PRIMARY KEY (id);


--
-- Name: admin_permissions_role_links admin_permissions_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_pkey PRIMARY KEY (id);


--
-- Name: admin_roles admin_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_roles
    ADD CONSTRAINT admin_roles_pkey PRIMARY KEY (id);


--
-- Name: admin_users admin_users_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_pkey PRIMARY KEY (id);


--
-- Name: admin_users_roles_links admin_users_roles_links_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_pkey PRIMARY KEY (id);


--
-- Name: articles_components articles_components_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles_components
    ADD CONSTRAINT articles_components_pkey PRIMARY KEY (id);


--
-- Name: articles articles_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);


--
-- Name: articles_tags_links articles_tags_links_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles_tags_links
    ADD CONSTRAINT articles_tags_links_pkey PRIMARY KEY (id);


--
-- Name: components_dynamic_images components_dynamic_images_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_images
    ADD CONSTRAINT components_dynamic_images_pkey PRIMARY KEY (id);


--
-- Name: components_dynamic_rich_texts components_dynamic_rich_texts_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_rich_texts
    ADD CONSTRAINT components_dynamic_rich_texts_pkey PRIMARY KEY (id);


--
-- Name: components_dynamic_section_titles components_dynamic_section_titles_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_section_titles
    ADD CONSTRAINT components_dynamic_section_titles_pkey PRIMARY KEY (id);


--
-- Name: components_dynamic_slideshows components_dynamic_slideshows_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_slideshows
    ADD CONSTRAINT components_dynamic_slideshows_pkey PRIMARY KEY (id);


--
-- Name: components_dynamic_texts components_dynamic_texts_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_dynamic_texts
    ADD CONSTRAINT components_dynamic_texts_pkey PRIMARY KEY (id);


--
-- Name: components_shared_seos components_shared_seos_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.components_shared_seos
    ADD CONSTRAINT components_shared_seos_pkey PRIMARY KEY (id);


--
-- Name: contacts_components contacts_components_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.contacts_components
    ADD CONSTRAINT contacts_components_pkey PRIMARY KEY (id);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: files_folder_links files_folder_links_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_pkey PRIMARY KEY (id);


--
-- Name: files files_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);


--
-- Name: files_related_morphs files_related_morphs_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files_related_morphs
    ADD CONSTRAINT files_related_morphs_pkey PRIMARY KEY (id);


--
-- Name: homes_components homes_components_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.homes_components
    ADD CONSTRAINT homes_components_pkey PRIMARY KEY (id);


--
-- Name: homes homes_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.homes
    ADD CONSTRAINT homes_pkey PRIMARY KEY (id);


--
-- Name: i18n_locale i18n_locale_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.i18n_locale
    ADD CONSTRAINT i18n_locale_pkey PRIMARY KEY (id);


--
-- Name: strapi_api_tokens strapi_api_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_api_tokens
    ADD CONSTRAINT strapi_api_tokens_pkey PRIMARY KEY (id);


--
-- Name: strapi_core_store_settings strapi_core_store_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_core_store_settings
    ADD CONSTRAINT strapi_core_store_settings_pkey PRIMARY KEY (id);


--
-- Name: strapi_database_schema strapi_database_schema_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_database_schema
    ADD CONSTRAINT strapi_database_schema_pkey PRIMARY KEY (id);


--
-- Name: strapi_migrations strapi_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_migrations
    ADD CONSTRAINT strapi_migrations_pkey PRIMARY KEY (id);


--
-- Name: strapi_webhooks strapi_webhooks_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_webhooks
    ADD CONSTRAINT strapi_webhooks_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: up_permissions up_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_pkey PRIMARY KEY (id);


--
-- Name: up_permissions_role_links up_permissions_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_pkey PRIMARY KEY (id);


--
-- Name: up_roles up_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_roles
    ADD CONSTRAINT up_roles_pkey PRIMARY KEY (id);


--
-- Name: up_users up_users_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_users
    ADD CONSTRAINT up_users_pkey PRIMARY KEY (id);


--
-- Name: up_users_role_links up_users_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_pkey PRIMARY KEY (id);


--
-- Name: upload_folders_parent_links upload_folders_parent_links_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_pkey PRIMARY KEY (id);


--
-- Name: upload_folders upload_folders_path_id_index; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_path_id_index UNIQUE (path_id);


--
-- Name: upload_folders upload_folders_path_index; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_path_index UNIQUE (path);


--
-- Name: upload_folders upload_folders_pkey; Type: CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_pkey PRIMARY KEY (id);


--
-- Name: abouts_component_type_index; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX abouts_component_type_index ON public.abouts_components USING btree (component_type);


--
-- Name: abouts_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX abouts_created_by_id_fk ON public.abouts USING btree (created_by_id);


--
-- Name: abouts_entity_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX abouts_entity_fk ON public.abouts_components USING btree (entity_id);


--
-- Name: abouts_field_index; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX abouts_field_index ON public.abouts_components USING btree (field);


--
-- Name: abouts_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX abouts_updated_by_id_fk ON public.abouts USING btree (updated_by_id);


--
-- Name: admin_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_permissions_created_by_id_fk ON public.admin_permissions USING btree (created_by_id);


--
-- Name: admin_permissions_role_links_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_permissions_role_links_fk ON public.admin_permissions_role_links USING btree (permission_id);


--
-- Name: admin_permissions_role_links_inv_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_permissions_role_links_inv_fk ON public.admin_permissions_role_links USING btree (role_id);


--
-- Name: admin_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_permissions_updated_by_id_fk ON public.admin_permissions USING btree (updated_by_id);


--
-- Name: admin_roles_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_roles_created_by_id_fk ON public.admin_roles USING btree (created_by_id);


--
-- Name: admin_roles_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_roles_updated_by_id_fk ON public.admin_roles USING btree (updated_by_id);


--
-- Name: admin_users_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_users_created_by_id_fk ON public.admin_users USING btree (created_by_id);


--
-- Name: admin_users_roles_links_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_users_roles_links_fk ON public.admin_users_roles_links USING btree (user_id);


--
-- Name: admin_users_roles_links_inv_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_users_roles_links_inv_fk ON public.admin_users_roles_links USING btree (role_id);


--
-- Name: admin_users_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX admin_users_updated_by_id_fk ON public.admin_users USING btree (updated_by_id);


--
-- Name: articles_component_type_index; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX articles_component_type_index ON public.articles_components USING btree (component_type);


--
-- Name: articles_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX articles_created_by_id_fk ON public.articles USING btree (created_by_id);


--
-- Name: articles_entity_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX articles_entity_fk ON public.articles_components USING btree (entity_id);


--
-- Name: articles_field_index; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX articles_field_index ON public.articles_components USING btree (field);


--
-- Name: articles_tags_links_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX articles_tags_links_fk ON public.articles_tags_links USING btree (article_id);


--
-- Name: articles_tags_links_inv_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX articles_tags_links_inv_fk ON public.articles_tags_links USING btree (tag_id);


--
-- Name: articles_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX articles_updated_by_id_fk ON public.articles USING btree (updated_by_id);


--
-- Name: contacts_component_type_index; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX contacts_component_type_index ON public.contacts_components USING btree (component_type);


--
-- Name: contacts_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX contacts_created_by_id_fk ON public.contacts USING btree (created_by_id);


--
-- Name: contacts_entity_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX contacts_entity_fk ON public.contacts_components USING btree (entity_id);


--
-- Name: contacts_field_index; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX contacts_field_index ON public.contacts_components USING btree (field);


--
-- Name: contacts_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX contacts_updated_by_id_fk ON public.contacts USING btree (updated_by_id);


--
-- Name: files_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX files_created_by_id_fk ON public.files USING btree (created_by_id);


--
-- Name: files_folder_links_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX files_folder_links_fk ON public.files_folder_links USING btree (file_id);


--
-- Name: files_folder_links_inv_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX files_folder_links_inv_fk ON public.files_folder_links USING btree (folder_id);


--
-- Name: files_related_morphs_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX files_related_morphs_fk ON public.files_related_morphs USING btree (file_id);


--
-- Name: files_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX files_updated_by_id_fk ON public.files USING btree (updated_by_id);


--
-- Name: homes_component_type_index; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX homes_component_type_index ON public.homes_components USING btree (component_type);


--
-- Name: homes_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX homes_created_by_id_fk ON public.homes USING btree (created_by_id);


--
-- Name: homes_entity_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX homes_entity_fk ON public.homes_components USING btree (entity_id);


--
-- Name: homes_field_index; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX homes_field_index ON public.homes_components USING btree (field);


--
-- Name: homes_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX homes_updated_by_id_fk ON public.homes USING btree (updated_by_id);


--
-- Name: i18n_locale_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX i18n_locale_created_by_id_fk ON public.i18n_locale USING btree (created_by_id);


--
-- Name: i18n_locale_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX i18n_locale_updated_by_id_fk ON public.i18n_locale USING btree (updated_by_id);


--
-- Name: strapi_api_tokens_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX strapi_api_tokens_created_by_id_fk ON public.strapi_api_tokens USING btree (created_by_id);


--
-- Name: strapi_api_tokens_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX strapi_api_tokens_updated_by_id_fk ON public.strapi_api_tokens USING btree (updated_by_id);


--
-- Name: tags_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX tags_created_by_id_fk ON public.tags USING btree (created_by_id);


--
-- Name: tags_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX tags_updated_by_id_fk ON public.tags USING btree (updated_by_id);


--
-- Name: up_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_permissions_created_by_id_fk ON public.up_permissions USING btree (created_by_id);


--
-- Name: up_permissions_role_links_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_permissions_role_links_fk ON public.up_permissions_role_links USING btree (permission_id);


--
-- Name: up_permissions_role_links_inv_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_permissions_role_links_inv_fk ON public.up_permissions_role_links USING btree (role_id);


--
-- Name: up_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_permissions_updated_by_id_fk ON public.up_permissions USING btree (updated_by_id);


--
-- Name: up_roles_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_roles_created_by_id_fk ON public.up_roles USING btree (created_by_id);


--
-- Name: up_roles_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_roles_updated_by_id_fk ON public.up_roles USING btree (updated_by_id);


--
-- Name: up_users_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_users_created_by_id_fk ON public.up_users USING btree (created_by_id);


--
-- Name: up_users_role_links_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_users_role_links_fk ON public.up_users_role_links USING btree (user_id);


--
-- Name: up_users_role_links_inv_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_users_role_links_inv_fk ON public.up_users_role_links USING btree (role_id);


--
-- Name: up_users_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX up_users_updated_by_id_fk ON public.up_users USING btree (updated_by_id);


--
-- Name: upload_files_folder_path_index; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX upload_files_folder_path_index ON public.files USING btree (folder_path);


--
-- Name: upload_folders_created_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX upload_folders_created_by_id_fk ON public.upload_folders USING btree (created_by_id);


--
-- Name: upload_folders_parent_links_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX upload_folders_parent_links_fk ON public.upload_folders_parent_links USING btree (folder_id);


--
-- Name: upload_folders_parent_links_inv_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX upload_folders_parent_links_inv_fk ON public.upload_folders_parent_links USING btree (inv_folder_id);


--
-- Name: upload_folders_updated_by_id_fk; Type: INDEX; Schema: public; Owner: db-strapi-admin
--

CREATE INDEX upload_folders_updated_by_id_fk ON public.upload_folders USING btree (updated_by_id);


--
-- Name: abouts abouts_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.abouts
    ADD CONSTRAINT abouts_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: abouts_components abouts_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.abouts_components
    ADD CONSTRAINT abouts_entity_fk FOREIGN KEY (entity_id) REFERENCES public.abouts(id) ON DELETE CASCADE;


--
-- Name: abouts abouts_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.abouts
    ADD CONSTRAINT abouts_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_permissions admin_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_permissions
    ADD CONSTRAINT admin_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_permissions_role_links admin_permissions_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_fk FOREIGN KEY (permission_id) REFERENCES public.admin_permissions(id) ON DELETE CASCADE;


--
-- Name: admin_permissions_role_links admin_permissions_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.admin_roles(id) ON DELETE CASCADE;


--
-- Name: admin_permissions admin_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_permissions
    ADD CONSTRAINT admin_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_roles admin_roles_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_roles
    ADD CONSTRAINT admin_roles_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_roles admin_roles_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_roles
    ADD CONSTRAINT admin_roles_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_users admin_users_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_users_roles_links admin_users_roles_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_fk FOREIGN KEY (user_id) REFERENCES public.admin_users(id) ON DELETE CASCADE;


--
-- Name: admin_users_roles_links admin_users_roles_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.admin_roles(id) ON DELETE CASCADE;


--
-- Name: admin_users admin_users_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: articles articles_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: articles_components articles_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles_components
    ADD CONSTRAINT articles_entity_fk FOREIGN KEY (entity_id) REFERENCES public.articles(id) ON DELETE CASCADE;


--
-- Name: articles_tags_links articles_tags_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles_tags_links
    ADD CONSTRAINT articles_tags_links_fk FOREIGN KEY (article_id) REFERENCES public.articles(id) ON DELETE CASCADE;


--
-- Name: articles_tags_links articles_tags_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles_tags_links
    ADD CONSTRAINT articles_tags_links_inv_fk FOREIGN KEY (tag_id) REFERENCES public.tags(id) ON DELETE CASCADE;


--
-- Name: articles articles_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: contacts contacts_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: contacts_components contacts_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.contacts_components
    ADD CONSTRAINT contacts_entity_fk FOREIGN KEY (entity_id) REFERENCES public.contacts(id) ON DELETE CASCADE;


--
-- Name: contacts contacts_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: files files_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: files_folder_links files_folder_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_fk FOREIGN KEY (file_id) REFERENCES public.files(id) ON DELETE CASCADE;


--
-- Name: files_folder_links files_folder_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_inv_fk FOREIGN KEY (folder_id) REFERENCES public.upload_folders(id) ON DELETE CASCADE;


--
-- Name: files_related_morphs files_related_morphs_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files_related_morphs
    ADD CONSTRAINT files_related_morphs_fk FOREIGN KEY (file_id) REFERENCES public.files(id) ON DELETE CASCADE;


--
-- Name: files files_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: homes homes_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.homes
    ADD CONSTRAINT homes_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: homes_components homes_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.homes_components
    ADD CONSTRAINT homes_entity_fk FOREIGN KEY (entity_id) REFERENCES public.homes(id) ON DELETE CASCADE;


--
-- Name: homes homes_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.homes
    ADD CONSTRAINT homes_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: i18n_locale i18n_locale_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.i18n_locale
    ADD CONSTRAINT i18n_locale_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: i18n_locale i18n_locale_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.i18n_locale
    ADD CONSTRAINT i18n_locale_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_tokens strapi_api_tokens_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_api_tokens
    ADD CONSTRAINT strapi_api_tokens_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_tokens strapi_api_tokens_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.strapi_api_tokens
    ADD CONSTRAINT strapi_api_tokens_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: tags tags_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: tags tags_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_permissions up_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_permissions_role_links up_permissions_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_fk FOREIGN KEY (permission_id) REFERENCES public.up_permissions(id) ON DELETE CASCADE;


--
-- Name: up_permissions_role_links up_permissions_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.up_roles(id) ON DELETE CASCADE;


--
-- Name: up_permissions up_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_roles up_roles_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_roles
    ADD CONSTRAINT up_roles_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_roles up_roles_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_roles
    ADD CONSTRAINT up_roles_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_users up_users_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_users
    ADD CONSTRAINT up_users_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_users_role_links up_users_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_fk FOREIGN KEY (user_id) REFERENCES public.up_users(id) ON DELETE CASCADE;


--
-- Name: up_users_role_links up_users_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.up_roles(id) ON DELETE CASCADE;


--
-- Name: up_users up_users_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.up_users
    ADD CONSTRAINT up_users_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: upload_folders upload_folders_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: upload_folders_parent_links upload_folders_parent_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_fk FOREIGN KEY (folder_id) REFERENCES public.upload_folders(id) ON DELETE CASCADE;


--
-- Name: upload_folders_parent_links upload_folders_parent_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_inv_fk FOREIGN KEY (inv_folder_id) REFERENCES public.upload_folders(id) ON DELETE CASCADE;


--
-- Name: upload_folders upload_folders_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: db-strapi-admin
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

