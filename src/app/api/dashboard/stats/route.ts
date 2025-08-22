import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/config/database';

export async function GET(request: NextRequest) {
  try {
    console.log('Conectando a la base de datos...');
    await connectDB();
    console.log('Base de datos conectada, obteniendo estadísticas...');

    // Importar modelos desde el índice
    const { Patient, Appointment, Odontograma } = await import('@/lib/models');

    // Obtener estadísticas básicas
    const totalPatients = await Patient.countDocuments();
    console.log(`Total pacientes: ${totalPatients}`);
    
    const totalAppointments = await Appointment.countDocuments();
    console.log(`Total citas: ${totalAppointments}`);
    
    const totalOdontogramas = await Odontograma.countDocuments();
    console.log(`Total odontogramas: ${totalOdontogramas}`);

    // Obtener citas de hoy
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayAppointments = await Appointment.countDocuments({
      date: {
        $gte: today,
        $lt: tomorrow
      }
    });
    console.log(`Citas de hoy: ${todayAppointments}`);

    // Obtener pacientes recientes
    const recentPatients = await Patient.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('nombre apellido email telefono createdAt');
    console.log(`Pacientes recientes: ${recentPatients.length}`);

    const stats = {
      totalPatients,
      totalAppointments,
      totalOdontogramas,
      todayAppointments,
      recentPatients
    };

    console.log('Estadísticas obtenidas exitosamente');
    
    const response = NextResponse.json(stats);
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  } catch (error) {
    console.error('Error getting dashboard stats:', error);
    
    // Devolver un error más detallado para debugging
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : 'Error desconocido',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
