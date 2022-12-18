# Generated by Django 3.2.12 on 2022-12-17 17:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tour', '0002_auto_20221217_1701'),
        ('hotel', '0002_auto_20221217_1701'),
        ('general', '0003_attendance_ip_address'),
    ]

    operations = [
        migrations.CreateModel(
            name='Banner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=300)),
                ('link', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('img', models.CharField(max_length=300)),
                ('desc', models.CharField(max_length=250)),
                ('date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Footer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('row_title', models.CharField(max_length=100)),
                ('row_subtitle', models.CharField(max_length=300)),
                ('link', models.CharField(max_length=250)),
                ('footer_logo', models.CharField(max_length=300)),
                ('footer_desc', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Helpline',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number_1', models.CharField(max_length=20)),
                ('number_2', models.CharField(max_length=20)),
                ('whatsapp_no', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='LandingPage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('img', models.CharField(max_length=300)),
                ('desc', models.CharField(max_length=350)),
            ],
        ),
        migrations.CreateModel(
            name='Logo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('img', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='NearbyDestination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('img', models.CharField(max_length=300)),
                ('desc', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='SectionActivity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='SectionFeature',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('icon', models.CharField(max_length=300)),
                ('subtitle', models.CharField(max_length=250)),
                ('paragraph', models.CharField(max_length=300)),
            ],
        ),
        migrations.RemoveField(
            model_name='category',
            name='name',
        ),
        migrations.AddField(
            model_name='category',
            name='desc',
            field=models.CharField(default=None, max_length=300),
        ),
        migrations.AddField(
            model_name='category',
            name='img',
            field=models.CharField(default=None, max_length=300),
        ),
        migrations.AddField(
            model_name='category',
            name='img_title',
            field=models.CharField(default=None, max_length=150),
        ),
        migrations.AddField(
            model_name='category',
            name='title',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='currency',
            name='img',
            field=models.CharField(default=None, max_length=300),
        ),
        migrations.AddField(
            model_name='state',
            name='image',
            field=models.CharField(default=None, max_length=300),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='allow_blog_seo',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='category',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='desc',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='meta_desc',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='meta_tag',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='source',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='tags',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='thumbnail',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='country',
            name='image',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='country',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='emailtemplate',
            name='email_body',
            field=models.TextField(max_length=300),
        ),
        migrations.AlterField(
            model_name='emailtemplate',
            name='email_subject',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='emailtemplate',
            name='email_type',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='faqpage',
            name='details',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='faqpage',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='breadcumb_banner',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='copyright_text',
            field=models.TextField(max_length=300),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='disqus_website_name',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='error_img',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='favicon',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='footer_logo',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='footer_text',
            field=models.TextField(max_length=300),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='header_logo',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='secondary_color',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='theme_color',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='generalsetting',
            name='website_title',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='member',
            name='img',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='member',
            name='message',
            field=models.TextField(max_length=500),
        ),
        migrations.AlterField(
            model_name='memberbackgroud',
            name='img',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='newpagefaq',
            name='allow_seo_page',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='newpagefaq',
            name='details',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='newpagefaq',
            name='meta_desc',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='newpagefaq',
            name='meta_tag',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='newpagefaq',
            name='slug',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='newpagefaq',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='paymentgateway',
            name='desc',
            field=models.CharField(max_length=400),
        ),
        migrations.AlterField(
            model_name='slider',
            name='button_link',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='slider',
            name='button_name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='slider',
            name='details',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='slider',
            name='img',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='staff',
            name='image',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='state',
            name='address',
            field=models.TextField(max_length=250),
        ),
        migrations.AlterField(
            model_name='user',
            name='content',
            field=models.TextField(max_length=300),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='user',
            name='title',
            field=models.CharField(max_length=50),
        ),
        migrations.CreateModel(
            name='SectionTour',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='general.sectionactivity')),
                ('tour_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tour.exe')),
            ],
        ),
        migrations.CreateModel(
            name='SectionHotel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hotel_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotel.hotel')),
                ('section_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='general.sectionactivity')),
            ],
        ),
    ]
