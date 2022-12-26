create policy "Read-Only"
on "public"."logs"
as permissive
for select
to anon, authenticated
using (true);


create policy "Read-Only"
on "public"."places"
as permissive
for select
to anon, authenticated
using (true);


create policy "Read-Only"
on "public"."things"
as permissive
for select
to anon, authenticated
using (true);
